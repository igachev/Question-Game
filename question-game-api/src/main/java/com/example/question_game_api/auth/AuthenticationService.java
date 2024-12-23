package com.example.question_game_api.auth;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.question_game_api.exceptions.UserAlreadyExistsException;
import com.example.question_game_api.role.Role;
import com.example.question_game_api.role.RoleRepository;
import com.example.question_game_api.user.User;
import com.example.question_game_api.user.UserRepository;


@Service
public class AuthenticationService {

private PasswordEncoder passwordEncoder;
private UserRepository userRepository;
private RoleRepository roleRepository;

public AuthenticationService() { }


    @Autowired
    public AuthenticationService(
    PasswordEncoder passwordEncoder, 
    UserRepository userRepository,
    RoleRepository roleRepository
    ) {
    this.passwordEncoder = passwordEncoder;
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
}



    public RegisterResponse register(RegisterRequestDto registerRequestDto) throws Exception {
       
       if(userRepository.findByEmail(registerRequestDto.getEmail()) != null) {
       throw new UserAlreadyExistsException("User with that email already exists!");
       }

        User user = new User();
        user.setFirstName(registerRequestDto.getFirstName());
        user.setLastName(registerRequestDto.getLastName());
        user.setEmail(registerRequestDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequestDto.getPassword()));

        String roleType = user.getEmail().equals("admin@abv.bg") ? "ADMIN" : "USER";
        Role role = roleRepository.findByName(roleType).orElseThrow(() -> new Exception("Invalid role"));
        user.setRoles(List.of(role));

        User newUser = userRepository.save(user);

        RegisterResponse registerResponse = new RegisterResponse();
        registerResponse.setFirstName(newUser.getFirstName());
        registerResponse.setLastName(newUser.getLastName());
        registerResponse.setEmail(newUser.getEmail());

        return registerResponse;
    }
    
}
