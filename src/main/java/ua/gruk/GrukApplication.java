package ua.gruk;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ResourceLoader;

import ua.gruk.model.entity.Citizen;
import ua.gruk.model.entity.Community;
import ua.gruk.model.entity.Message;
import ua.gruk.model.entity.Subscription;
import ua.gruk.repository.CitizenRepository;
import ua.gruk.repository.CommunityRepository;
import ua.gruk.repository.MessageRepository;
import ua.gruk.repository.SubscriptionRepository;

@SpringBootApplication
public class GrukApplication {

    @Autowired
    private ResourceLoader loader;

    public static void main(String[] args) {
	SpringApplication.run(GrukApplication.class, args);
    }

    /*
     * This runner:
     * 1) fully fills the database table 'communities' from file 'communities_ua.txt' by the created ORM;
     * 2) fetchs from filled table some community objects, creates 9 citizens and saves each of them in the corresponding db table;
     * 3) fetchs each created citizen, subscribes 5th citizen to each other saved citizen and sends messages from 5th to each with 
     *    corresponding saving in database.
     *    
     * So, after start this SpringBoot back-end application, on the 'http://localhost:8080' will be available the initial front-end face.
     * So far, the security layer isn't realized yet, but on the front-end face you can see imitation of login and registration.
     * If login as '5citizen@gruk.ua' and 'password5', you will be redirect to the page of this user and can see his messaging
     * with possibility to send/delete messages. Besides that, you can find alredy saved to db citizens and subscribe/unsubscribe them.
     * Also you could save new user to the data base by the registration form. On the registration form pay attention to the its first
     * field where is realized autocomplete (for cyrillic letters) - by each taped letter is send the request to the back-end which orderly
     * responds with 7 variants. Password of the registration form must contain min 6 latin letters with digits.
     * Realized messaging and subscribing are sinchronized by websockets. For sinchronization testing is needed parallel login with another 
     * credentials (for example, '9citizen@gruk.ua' and 'password9') in the separate browser's window (or in another browser), so in two 
     * parallel windows open the corresponding dialog in "МОЇ ПОВІДОМЛЕННЯ" and send/delete messages to watch their synchronized rendering. 
     * 
     * If you want to have direct access to the back-end then try on 'http://localhost:8080/api/(see controllers in the ua.gruk.rest.controller package)'
     * where are available jsons of corresponding entities that were saved to the database after start this application.
     * 
     * WARNING: If to start (ng-serve) 'gruk-frontend' (Angular2 application) then the 'webapp' folder will be lost with the deployed front-end, 
     * but the same front-end face would be available on the 'http://localhost:4200'. To deploy back the 'webapp' folder, firstly stop ng-serve 
     * of 'gruk-frontend' then run its 'ng-build'.
     * 
     */
    @Bean
    CommandLineRunner init(CommunityRepository communityRepository, CitizenRepository citizenRepository,
	    SubscriptionRepository subscriptionRepository, MessageRepository messageRepository) {
	return event -> {
	    // 1)
	    BufferedReader reader = new BufferedReader(new InputStreamReader(loader.getResource("classpath:communities_ua.txt").getInputStream(), "UTF-8"));
	    String line;
	    while ((line = reader.readLine()) != null) {
		String[] com = line.split("/");
		    communityRepository.save(Community.getBuilder()
			    			.communityName(com[0])
			    			.rayon(com[1])
			    			.oblast(com[2])
			    			.wikiLink(com[3])
			    			.end());
	    }
	    
	    // 2)
	    Community community = communityRepository.findOne(10);
	    for (int i = 1; i < 10; i++) {
		if (i % 5 == 0)
		    community = communityRepository.findOne(20);
		citizenRepository.save(Citizen.getBuilder()
					.email(i + "citizen@gruk.ua")
					.password("password" + i)
					.citizenName("Name" + i, "Famil" + i, null)
					.community(community)
					.registration(LocalDate.now())
					.end());
	    }
	    
	    // 3)
	    Citizen subscriber = citizenRepository.findOne(5L);
	    for (long i = 1; i < 10; i++) {
		if (i != 5) {
		    Citizen to = citizenRepository.findOne(i);
		    subscriptionRepository.save(Subscription.instance(subscriber, to));
		    messageRepository.save(
			    new Message("< Citizen" + i + ", hi! How are you? >", null, subscriber, to));
		}
	    }
	    
	    System.out.println("Check @Query in MessageRepository: " + messageRepository.getPairKeys(5));
	};
    }
    
}
