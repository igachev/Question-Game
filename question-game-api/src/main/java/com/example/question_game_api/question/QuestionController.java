package com.example.question_game_api.question;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;







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

    @GetMapping
    public ResponseEntity<List<QuestionResponse>> generateTenRandomQuestions() {
        return ResponseEntity.ok(questionService.generateTenRandomQuestions());
    }

    @GetMapping("/all/admin")
    public ResponseEntity<List<QuestionResponse>> getAllQuestions() {
        return ResponseEntity.ok(questionService.getAllQuestions());
    }
    
    
    @GetMapping("/{question-id}")
    public ResponseEntity<QuestionResponse> getQuestion(
        @PathVariable(name = "question-id") Integer questionId
        ) {
        return ResponseEntity.ok(questionService.getQuestionById(questionId));
    }

    @PatchMapping("/{question-id}/edit")
    public ResponseEntity<QuestionResponse> editQuestion(
        @PathVariable(name = "question-id") Integer questionId, 
        @RequestBody @Valid QuestionRequestDto questionRequestDto
        ) {
        return ResponseEntity.ok(questionService.editQuestion(questionId,questionRequestDto)); 
    }

    @DeleteMapping("/{question-id}/delete")
    public ResponseEntity<String> deleteQuestion(
        @PathVariable(name = "question-id") Integer questionId
        ) {
        return new ResponseEntity<String>(questionService.deleteQuestion(questionId),HttpStatus.NO_CONTENT);
    }
    
}
