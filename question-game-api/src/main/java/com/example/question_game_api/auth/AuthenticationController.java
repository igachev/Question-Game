package com.example.question_game_api.auth;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("auth")
public class AuthenticationController {

    private AuthenticationService authenticationService;

    public AuthenticationController() { }

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }
    
    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(
        @RequestBody @Valid RegisterRequestDto registerRequestDto
        ) throws Exception {
        return ResponseEntity.ok(authenticationService.register(registerRequestDto));
    }
    
}
