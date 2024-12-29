package com.example.question_game_api.score;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.question_game_api.user.User;

public interface ScoreRepository extends JpaRepository<Score,Integer> {

    List<Score> findAllByUserOrderByPointsDesc(User existingUser);
    
}
