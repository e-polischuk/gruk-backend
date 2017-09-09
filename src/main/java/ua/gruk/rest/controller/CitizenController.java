package ua.gruk.rest.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import ua.gruk.model.entity.Citizen;
import ua.gruk.model.utility.PairKey;
import ua.gruk.repository.CitizenRepository;
import ua.gruk.rest.resource.CitizenResource;
import ua.gruk.rest.resource.KeyResource;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
@RestController
@RequestMapping(value = "/api") //, consumes = "application/json", produces = "application/json"
public class CitizenController {
    @Autowired
    private ObjectMapper jsonMapper;
    @Autowired
    private CitizenRepository citizenRepository;
    
    @PostMapping(value = "/registration")
    public ResponseEntity<CitizenResource> createCitizen(@RequestBody ObjectNode json) {
	Citizen citizen = null;
	try {
	    citizen = jsonMapper.readValue(json.get("citizen").traverse(), Citizen.class);
	    String password = json.get("password").asText();
	    citizen.setPassword(password);
	    citizen.setRegistration(LocalDate.now());
	    citizen = citizenRepository.saveAndFlush(citizen);
	    System.out.println("REGISTRED CITIZEN: " + citizen.getId() + ", email=" + citizen.getEmail() + ", password=" + citizen.getPassword());
	} catch (IOException e) {
	    System.out.println("REGISTRED CITIZEN ISN'T MAPPED!");
	    e.printStackTrace();
	}
	HttpStatus status = citizen != null ? HttpStatus.OK : HttpStatus.NOT_FOUND;	
        return ResponseEntity.status(status).body(new CitizenResource(citizen));
    }
    
    @PostMapping(value = "/login")
    public ResponseEntity<CitizenResource> login(@RequestBody ObjectNode json) {
	String email = json.get("email").asText();
	String password = json.get("password").asText();
	System.out.println("TRY LOGIN: email=" + email + ", password=" + password);
	Citizen resp = citizenRepository.findByEmail(email).get();
	boolean uncorrect = resp == null || !password.equals(resp.getPassword());
	System.out.println("LOGIN IS SECCESSFUL: " + (!uncorrect));
	HttpStatus status = uncorrect ? HttpStatus.NOT_FOUND : HttpStatus.OK;	
	return ResponseEntity.status(status).body(new CitizenResource(resp));
    }
    
    @GetMapping("/receiver/{pairKey}/{sender}")
    public ResponseEntity<CitizenResource> getReceiver(@PathVariable String pairKey, @PathVariable long sender) {
	long[] ids = PairKey.pairOf(pairKey);
	long id = sender == ids[0] ? ids[1] : ids[0];
	Citizen receiver = citizenRepository.findOne(id);
	return  ResponseEntity.ok(new CitizenResource(receiver));
    }
    
    @GetMapping("/{citizenId}")
    public ResponseEntity<CitizenResource> getCitizen(@PathVariable long citizenId) {
	Citizen citizen = citizenRepository.findOne(citizenId);
	if (citizen != null) citizen.setPassword(null);
	HttpStatus status = citizen != null ? HttpStatus.OK : HttpStatus.NOT_FOUND;	
	return ResponseEntity.status(status).body(new CitizenResource(citizen)); //.headers(headers())
    }
    
    @GetMapping("/citizens/{citizenId}")
    public ResponseEntity<List<Citizen>> getCitizens(@PathVariable long citizenId) {
	List<Citizen> citizens = citizenRepository.findFriends(citizenId);
	if (citizens != null && !citizens.isEmpty()) {
	    citizens.forEach(citizen -> {
		citizen.setPassword(null);
	    });
	}	
	return ResponseEntity.ok(citizens);
    }
    
    @GetMapping("/keyOf/{id1}/{id2}")
    public ResponseEntity<KeyResource> keyByPair(@PathVariable long id1, @PathVariable long id2) {
	return ResponseEntity.ok(new KeyResource(PairKey.keyOf(id1, id2)));
    }
    
//    @PostMapping("{authorId}/{wallOwnerId}/post")
//    public ResponseEntity<Post> addPost(@PathVariable long authorId, @PathVariable long wallOwnerId, @RequestBody Post post) {
//	post.setAuthor(citizenRepository.findOne(authorId));
//	Citizen wallOwner = citizenRepository.findOne(wallOwnerId);
//	post.setWallOwner(wallOwner);
//	post.setDateTime(LocalDateTime.now());
//	HttpStatus status = wallOwner.getWall().add(post) ? HttpStatus.CREATED : HttpStatus.SERVICE_UNAVAILABLE;
//	return ResponseEntity.status(status).body(post);
//    }
//    
//    @PostMapping("{authorId}/post/{postId}/comment")
//    public ResponseEntity<Comment> addComment(@RequestBody Comment comment) {
//	
//    }

}
