package com.example.question_game_api.score;

import java.time.LocalDateTime;


public class ScoreResponse {
    
    private Integer points;
    private LocalDateTime playedAt;
    private String playerEmail;

    public ScoreResponse() {

    }

    public ScoreResponse(Integer points, LocalDateTime playedAt, String playerEmail) {
        this.points = points;
        this.playedAt = playedAt;
        this.playerEmail = playerEmail;
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

    public String getPlayerEmail() {
        return playerEmail;
    }

    public void setPlayerEmail(String playerEmail) {
        this.playerEmail = playerEmail;
    }

    @Override
    public String toString() {
        return "ScoreResponse [points=" + points + ", playedAt=" + playedAt + ", playerEmail=" + playerEmail + "]";
    }

    
}
