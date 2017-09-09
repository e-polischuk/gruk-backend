package ua.gruk.rest.resource;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import org.springframework.hateoas.ResourceSupport;

import ua.gruk.model.entity.Citizen;
import ua.gruk.rest.controller.CitizenController;

public class CitizenResource extends ResourceSupport {
    private final Citizen citizen;
//    @Autowired
//    private Principal principal;
    
    public CitizenResource(Citizen citizen) {
	this.citizen = citizen;
	if (citizen != null) {
	    this.add(linkTo(methodOn(CitizenController.class).getCitizen(this.citizen.getId())).withSelfRel());
//		this.add(linkTo(methodOn(CitizenController.class).updateCitizen(principal, this.citizen)).withRel("updateSelf"));
//		this.add(linkTo(methodOn(CitizenController.class).deleteCitizen(principal)).withRel("deleteSelf"));
	}
	
    }

    public Citizen getCitizen() {
        return citizen;
    }

}
