package ua.gruk.rest.resource;

import org.springframework.hateoas.ResourceSupport;

import ua.gruk.model.entity.Message;

public class MessageResource extends ResourceSupport {
    private final Message message;
    
    public MessageResource(Message message, long withId) {
	this.message = message;
//	if (message != null) {
//	    this.add(linkTo(methodOn(CitizenController.class).getDialog(principal, withId)).withRel("dialogWithUser"));
//	    this.add(linkTo(methodOn(CitizenController.class).getAllDialogs(principal)).withRel("allOwnDialogs"));
//	}
	
    }

    public Message getMessage() {
        return message;
    }

}
