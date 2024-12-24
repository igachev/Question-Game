package com.example.question_game_api.question;

import java.util.List;

public class QuestionResponse {
    
    private Integer id;
    private String question;
    private List<String> answers;
    private String correctAnswer;
    private Integer creatorId; 

    public QuestionResponse() {

    }

    public QuestionResponse(Integer id, String question, List<String> answers, String correctAnswer,
            Integer creatorId) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.creatorId = creatorId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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

    public Integer getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(Integer creatorId) {
        this.creatorId = creatorId;
    }

    @Override
    public String toString() {
        return "QuestionResponse [id=" + id + ", question=" + question + ", answers=" + answers + ", correctAnswer="
                + correctAnswer + ", creatorId=" + creatorId + "]";
    }

}
