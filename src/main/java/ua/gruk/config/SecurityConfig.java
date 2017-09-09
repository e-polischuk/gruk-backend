package ua.gruk.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
//    @Autowired
//    private CitizenRepository citizenRepository;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
	http
	.formLogin().disable()
//		.loginPage("/login")
	.csrf().disable()	
//	.requiresChannel()
//		.antMatchers("/registration").requiresSecure()
	.authorizeRequests()
//        	.antMatchers("/", "/login", "/registration", "/server/", "/resources/static/**").permitAll()  .authenticated()
                .anyRequest().permitAll();
//		.antMatchers("/update").hasRole("USER")
//		.antMatchers("/detete").hasRole("USER")
//		.antMatchers("/messages").hasRole("USER")
//		.anyRequest().permitAll()
//	.and().rememberMe()
//		.tokenValiditySeconds(2419200)
//	.and().logout()
//		.logoutSuccessUrl("/")
//		.logoutUrl("/signout");
//	.and().authorizeRequests()
//                .antMatchers("/static/**").permit();
    }

//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//	auth.userDetailsService(userDetailsService());
//    }
//
//    @Override
//    protected UserDetailsService userDetailsService() {
//	return email -> {
//	    return citizenRepository.findByEmail(email).map(citizen -> {
//		return new User(citizen.getEmail(), citizen.getPassword(), !citizen.isBlocked(), true, true, true,
//			AuthorityUtils.createAuthorityList("USER"));
//	    }).orElseThrow(() -> new UsernameNotFoundException("Citizen with email '" + email + "' not found!"));
//
//	};
//    }
}
