package com.example.question_game_api;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.question_game_api.role.Role;
import com.example.question_game_api.role.RoleRepository;

@SpringBootApplication
public class QuestionGameApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuestionGameApiApplication.class, args);
	}

@Bean
	public CommandLineRunner runner(RoleRepository roleRepository) {
		return (args) -> {
			if(roleRepository.findByName("USER").isEmpty()) {
				var role = new Role();
				role.setName("USER");
				roleRepository.save(role);
			}
			if(roleRepository.findByName("ADMIN").isEmpty()) {
				var role = new Role();
				role.setName("ADMIN");
				roleRepository.save(role);
			}
		};
	};

}
