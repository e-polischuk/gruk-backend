package ua.gruk.rest.resource;

import org.springframework.hateoas.ResourceSupport;

public class KeyResource extends ResourceSupport {
    private final String key;
    
    public KeyResource(String key) {
	this.key = key;
    }
    
    public String getKey() {
        return key;
    }
    
}
