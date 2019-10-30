package com.joel.reviewapprestapi.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class IMSecurityConfiguration extends WebSecurityConfigurerAdapter{

	@Autowired
	public void confireGlobralSecurity(AuthenticationManagerBuilder auth) throws Exception {
		//manually adding users
		auth.inMemoryAuthentication().withUser("joel123").password(passwordEncoder().encode("123")).roles("USER","ADMIN");
			
	}
	//override method on websecurity confirer adapbter
		@Override
		protected void configure(HttpSecurity http) throws Exception{
			// this security configuration only use is from app to app in the same building is not secured. 
			http.httpBasic().and().authorizeRequests().antMatchers("/**")
				.hasRole("USER").and()
				.csrf().disable()
				.headers().frameOptions().disable();
			//allows cors to come thru on request
				http.cors();
		}
	
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
