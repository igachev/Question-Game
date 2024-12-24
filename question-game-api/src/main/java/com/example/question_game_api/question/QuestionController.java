package com.example.question_game_api.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("questions")
public class QuestionController {
    
    private QuestionService questionService;

    public QuestionController() { }

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping(path = "/create")
    public ResponseEntity<QuestionResponse> createQuestion(
        @RequestBody @Valid QuestionRequestDto questionRequestDto,
        Authentication connectedUser
        ) {
        return ResponseEntity.ok(questionService.createQuestion(questionRequestDto,connectedUser));
    }
    
}
