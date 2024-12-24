package com.example.question_game_api.question;

import java.util.List;

import com.example.question_game_api.user.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Question {

    @Id
    @GeneratedValue
    private Integer id;
    @Column(unique=true,nullable = false)
    private String question;
    private List<String> answers;
    private String correctAnswer;
    @ManyToOne
    @JoinColumn(name="creator_id")
    private User creator;
    
    public Question() { }

    public Question(Integer id, String question, List<String> answers, String correctAnswer, User creator) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.creator = creator;
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

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    @Override
    public String toString() {
        return "Question [id=" + id + ", question=" + question + ", answers=" + answers + ", correctAnswer="
                + correctAnswer + ", creator=" + creator + "]";
    }

}
