package ua.gruk.rest.controller;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

import ua.gruk.model.entity.Message;
import ua.gruk.model.utility.Dialog;
import ua.gruk.repository.MessageRepository;
import ua.gruk.rest.resource.KeyResource;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
@RestController
@RequestMapping(value = "/api/msg")
public class DialogController {
    @Autowired
    private SimpMessagingTemplate notifier;
    @Autowired
    private MessageRepository messageRepository;
    
    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody Message message) {
	message.setDateTime(LocalDateTime.now());
	message = messageRepository.saveAndFlush(message);
	long id = message.getReceiver().getId();
	notifier.convertAndSend("/queue/" + id, new KeyResource("msg"));
	return ResponseEntity.ok(message);
    }
    
    @PostMapping("/deleteMsg")
    public ResponseEntity<Dialog> deleteMessage(@RequestBody ObjectNode json) { 
	long messageId = json.get("messageId").asLong();
	long holder = json.get("holder").asLong();
	Message message = messageRepository.findOne(messageId);
	long id = message.getSender().getId();
	if (id == holder) id = message.getReceiver().getId();
        String pairKey = message.getPairKey();
        messageRepository.delete(message);
        List<Message> messages = messageRepository.getMessageByPairKey(pairKey);
        //HttpStatus status = messages == null || messages.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK;
        Dialog dialog = pairKey == null || messages.isEmpty() ? new Dialog("1", 1) : new Dialog(pairKey, messages, holder);
        notifier.convertAndSend("/queue/" + id, new KeyResource("msg"));
	return ResponseEntity.ok(dialog);
    } 
    
    @PostMapping("/dialog")
    public ResponseEntity<Dialog> getDialog(@RequestBody ObjectNode json) {
	String pairKey = json.get("pairKey").asText();
	boolean isRed = json.get("isRed").asBoolean();
	long senderId = json.get("senderId").asLong();
	if (isRed) messageRepository.setRed(isRed, pairKey);
	List<Message> messages = messageRepository.getMessageByPairKey(pairKey);
	Dialog dialog = messages == null || messages.isEmpty() ? new Dialog(pairKey, senderId) : new Dialog(pairKey, messages, senderId);	
	return ResponseEntity.ok(dialog);
    }
    
    @PostMapping("/dialogs")
    public ResponseEntity<Collection<Dialog>> getDialogs(@RequestBody ObjectNode json)  {
	long citizenId = json.get("holder").asLong();
	List<String> keys = Arrays.asList(json.get("pairKeys").asText().split("/"));
	if (keys != null && !keys.isEmpty()) messageRepository.setReds(true, keys);
	List<Message> messages = messageRepository.getMessageBySenderIdOrReceiverId(citizenId, citizenId);
//	HttpStatus status = messages == null || messages.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK;	
	return ResponseEntity.ok(dialogsOf(messages, citizenId));
    }
    
    @GetMapping("/count/{id}")
    public ResponseEntity<Integer> countUnred(@PathVariable long id) {
	int count = messageRepository.countUnred(id, false);
	return ResponseEntity.ok(count);
    }
    
    @PostMapping("/dialogKeys")
    public ResponseEntity<List<String>> getDialogKeys(@RequestBody long citizenId) {
	List<String> pairKeys = messageRepository.getPairKeys(citizenId);
	HttpStatus status = pairKeys == null || pairKeys.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK;	
	return ResponseEntity.status(status).body(pairKeys);
    }

    private Collection<Dialog> dialogsOf(List<Message> messages, long holder) {
	Map<String, Dialog> dialogs = new LinkedHashMap<>();
	messages.forEach(message -> {
	    String key = message.getPairKey();
	    Dialog dialog = dialogs.containsKey(key) ? dialogs.get(key) : new Dialog(key, holder);
	    dialog.add(message);
	    dialogs.put(key, dialog);
	});
	return dialogs.values();
    }
}
