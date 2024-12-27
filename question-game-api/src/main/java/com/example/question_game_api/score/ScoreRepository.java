package com.example.question_game_api.score;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score,Integer> {
    
}
