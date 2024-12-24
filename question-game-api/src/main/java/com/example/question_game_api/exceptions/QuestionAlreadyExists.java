package com.example.question_game_api.exceptions;

public class QuestionAlreadyExists extends RuntimeException {
    
    public QuestionAlreadyExists(String message) {
        super(message);
    }
    
}
