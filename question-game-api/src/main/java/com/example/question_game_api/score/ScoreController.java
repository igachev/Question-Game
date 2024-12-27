package com.example.question_game_api.score;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("score")
public class ScoreController {
    
    private ScoreService scoreService;

    public ScoreController() {

    }

    @Autowired
    public ScoreController(ScoreService scoreService) {
        this.scoreService = scoreService;
    }

    @PostMapping("/add")
    public ResponseEntity<ScoreResponse> addScore(
        @RequestBody @Valid ScoreRequestDto scoreRequestDto,
        Authentication connectedUser
        ) {
    return new ResponseEntity<ScoreResponse>(scoreService.addScore(scoreRequestDto,connectedUser),HttpStatus.CREATED);
    }
    
}
