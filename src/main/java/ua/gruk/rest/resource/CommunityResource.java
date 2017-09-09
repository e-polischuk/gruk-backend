package ua.gruk.rest.resource;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import org.springframework.hateoas.ResourceSupport;

import ua.gruk.model.entity.Community;
import ua.gruk.rest.controller.CommunityController;

public class CommunityResource extends ResourceSupport {
    private final Community community;

    public CommunityResource(Community community) {
	this.community = community;
	if (community != null) {
	    this.add(linkTo(methodOn(CommunityController.class).getCommunity(community.getId())).withSelfRel());
	    this.add(linkTo(methodOn(CommunityController.class).getCommunityCitizens(community.getId(), 1)).withRel("communityCitizens"));
	}
    }

    public Community getCommunity() {
        return community;
    }

}
