package com.example.question_game_api.score;


import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.PositiveOrZero;



public class ScoreRequestDto {
    
    @Max(value = 100,message = "Points value cannot be greater than 100")
    @PositiveOrZero(message = "Points value must be 0 or positive number")
    private Integer points;

    public Integer getPoints() {
        return points;
    }
    public void setPoints(Integer points) {
        this.points = points;
    }

}
