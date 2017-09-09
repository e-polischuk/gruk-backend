 package ua.gruk.rest.resource;

import org.springframework.hateoas.ResourceSupport;

import ua.gruk.model.utility.Dialog;

public class DialogResource extends ResourceSupport {
    private final Dialog dialog;
    
    public DialogResource(Dialog dialog, long withId) {
	this.dialog = dialog;
//	this.add(linkTo(methodOn(CitizenController.class).getDialog(principal, withId)).withSelfRel());
//	this.add(linkTo(methodOn(CitizenController.class).getAllDialogs(principal)).withRel("allOwnDialogs"));	
    }

    public Dialog getDialog() {
        return dialog;
    }

}
