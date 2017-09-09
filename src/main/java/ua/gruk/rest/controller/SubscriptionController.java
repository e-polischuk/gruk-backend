package ua.gruk.rest.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ua.gruk.model.entity.Citizen;
import ua.gruk.model.entity.Subscription;
import ua.gruk.repository.CitizenRepository;
import ua.gruk.repository.SubscriptionRepository;
import ua.gruk.rest.resource.KeyResource;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
@RestController
@RequestMapping(value = "/api/subscript")
public class SubscriptionController {
    @Autowired
    private SimpMessagingTemplate notifier;
    @Autowired
    private SubscriptionRepository subscriptionRepository;
    @Autowired
    private CitizenRepository citizenRepository;
    
    @GetMapping("/{citizenId}")
    public ResponseEntity<List<Subscription>> subscriptOf(@PathVariable long citizenId) {
	List<Subscription> subscriptions = subscriptionRepository.getSubscriptionByFirstCitizenIdOrSecondCitizenId(citizenId, citizenId);
	return ResponseEntity.ok(subscriptions);
    }
    
    @PostMapping("/new")
    public ResponseEntity<Subscription> newSubscript(@RequestBody long[] id) {
	Citizen subscriber = citizenRepository.findOne(id[0]);
	Citizen to = citizenRepository.findOne(id[1]);
	Subscription subscript = Subscription.instance(subscriber, to);
	subscript = subscriptionRepository.saveAndFlush(subscript);
	System.out.println("CREATED SUBSCRIPT: " + subscript);
	notifier.convertAndSend("/queue/" + id[0], new KeyResource("sub"));
	notifier.convertAndSend("/queue/" + id[1], new KeyResource("sub"));
	return ResponseEntity.ok(subscript);
    }
    
    @PutMapping("/update")
    public ResponseEntity<Subscription> updateSubscript(@RequestBody Subscription subscript) {
	subscript = subscriptionRepository.saveAndFlush(subscript);
	System.out.println("UPDATED SUBSCRIPT: " + subscript);
	notifier.convertAndSend("/queue/" + subscript.getFirstCitizen().getId(), new KeyResource("sub"));
	notifier.convertAndSend("/queue/" + subscript.getSecondCitizen().getId(), new KeyResource("sub"));
	return ResponseEntity.ok(subscript);
    }
    
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteSubscript(@RequestBody Subscription subscript) {
	System.out.println("TRY TO DELETE: " + subscript);
	subscriptionRepository.delete(subscript);
	System.out.println("DELETED SUBSCRIPT!");
	notifier.convertAndSend("/queue/" + subscript.getFirstCitizen().getId(), new KeyResource("sub"));
	notifier.convertAndSend("/queue/" + subscript.getSecondCitizen().getId(), new KeyResource("sub"));
	return ResponseEntity.ok("Seccessfully unsubscribe!");
    }
    
    @GetMapping("/of/{subscriberId}")
    public ResponseEntity<List<Citizen>> subscriptionsOf(@PathVariable long subscriberId) {
	List<Subscription> subscribeds = subscriptionRepository.getSubscriptionByFirstCitizenIdAndIsFirstSubscriberIsTrueOrSecondCitizenIdAndIsSecondSubscriberIsTrue(subscriberId, subscriberId);
	List<Citizen> citizens = new ArrayList<>();
	subscribeds.forEach(sub -> {
	    citizens.add(sub.getFirstCitizen().getId() == subscriberId ? sub.getSecondCitizen() : sub.getFirstCitizen());
	});
	return ResponseEntity.ok(citizens);
    }
    
    @GetMapping("/to/{subscribedId}")
    public ResponseEntity<List<Citizen>> subscriptionsTo(@PathVariable long subscribedId) {
	List<Subscription> subscribers = subscriptionRepository.getSubscriptionByFirstCitizenIdAndIsSecondSubscriberIsTrueOrSecondCitizenIdAndIsFirstSubscriberIsTrue(subscribedId, subscribedId);
	List<Citizen> citizens = new ArrayList<>();
	subscribers.forEach(sub -> {
	    citizens.add(sub.getFirstCitizen().getId() == subscribedId ? sub.getSecondCitizen() : sub.getFirstCitizen());
	});
	return ResponseEntity.ok(citizens);
    }
    
}
