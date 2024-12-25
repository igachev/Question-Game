package com.example.question_game_api.exceptions;

public class NonExistentQuestionException extends RuntimeException {
    public NonExistentQuestionException(String message) {
        super(message);
    }
}
