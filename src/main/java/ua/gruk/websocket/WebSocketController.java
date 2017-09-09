package ua.gruk.websocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import ua.gruk.rest.resource.KeyResource;

@Controller
public class WebSocketController {
    
    @MessageMapping("/send")
    @SendTo("/queue/{id}")
    public KeyResource greeting(KeyResource key) throws Exception {
	return key;
    }
    
}
