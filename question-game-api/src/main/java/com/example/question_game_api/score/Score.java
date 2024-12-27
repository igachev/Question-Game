package com.example.question_game_api.score;

import java.time.LocalDateTime;

import com.example.question_game_api.user.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Score {
    
    @Id
    @GeneratedValue
    private Integer id;
    private Integer points;
    @Column(updatable = false,nullable = false)
    private LocalDateTime playedAt;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Score() {

    }

    public Score(Integer id, Integer points, LocalDateTime playedAt, User user) {
        this.id = id;
        this.points = points;
        this.playedAt = playedAt;
        this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public LocalDateTime getPlayedAt() {
        return playedAt;
    }

    public void setPlayedAt(LocalDateTime playedAt) {
        this.playedAt = playedAt;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Score [id=" + id + ", points=" + points + ", playedAt=" + playedAt + "]";
    }

}
