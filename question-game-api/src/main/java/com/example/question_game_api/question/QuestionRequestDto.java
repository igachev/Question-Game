package com.example.question_game_api.question;

import java.util.List;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class QuestionRequestDto {
    @NotEmpty(message = "question is required")
    @NotBlank(message = "question is required")
    @Size(min = 6,message = "question must be at least 6 characters long")
    private String question;
    @NotEmpty(message = "answers are required")
    private List<String> answers;
    @NotEmpty(message = "correctAnswer is required")
    @NotBlank(message = "correctAnswer is required")
    private String correctAnswer;

    public String getQuestion() {
        return question;
    }
    public void setQuestion(String question) {
        this.question = question;
    }

    public List<String> getAnswers() {
        return answers;
    }
    public void setAnswers(List<String> answers) {
        this.answers = answers;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }
    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    
}
