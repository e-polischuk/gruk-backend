package ua.gruk.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ua.gruk.model.entity.Citizen;
import ua.gruk.model.entity.Community;
import ua.gruk.repository.CitizenRepository;
import ua.gruk.repository.CommunityRepository;
import ua.gruk.rest.resource.CommunityResource;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
@RestController
@RequestMapping("/api/community")
public class CommunityController {
    @Autowired
    private CommunityRepository communityRepository;
    @Autowired
    private CitizenRepository citizenRepository;
    
    @GetMapping("/{communityId}")
    public ResponseEntity<CommunityResource> getCommunity(@PathVariable int communityId) {
	Community community = communityRepository.findOne(communityId);
	HttpStatus status = community != null ? HttpStatus.OK : HttpStatus.NOT_FOUND;
	return ResponseEntity.status(status).body(new CommunityResource(community));
    }
    
    @GetMapping("/find/{nameStart}")
    public ResponseEntity<List<Community>> findBy(@PathVariable String nameStart) {
	List<Community> communities = communityRepository.findTop7ByCommunityNameStartingWithIgnoreCase(nameStart);
	HttpStatus status = communities != null ? HttpStatus.OK : HttpStatus.NOT_FOUND;
	return ResponseEntity.status(status).body(communities);
    }
    
    @GetMapping("/citizensOf/{communityId}")
    public ResponseEntity<List<Citizen>> citizensOf(@PathVariable int communityId) {
	List<Citizen> citizens = citizenRepository.findByCommunityId(communityId);
	HttpStatus status = citizens == null || citizens.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK;
	return ResponseEntity.status(status).body(citizens);
    }
    
    @GetMapping("/{communityId}/citizens/{pageNum}")
    public Page<Citizen> getCommunityCitizens(@PathVariable int communityId, @PathVariable int pageNum) {
	int[] point = endpoints(pageNum);
	return citizenRepository.findByCommunityId(communityId, new PageRequest(point[0], point[1]));	
    }
    
    
    
    private int[] endpoints(int pageNum) {
	int step = 20;
	int from = step * (pageNum - 1) + 1;
	int to = from + step - 1;
	return new int[] {from, to};
    }

}
