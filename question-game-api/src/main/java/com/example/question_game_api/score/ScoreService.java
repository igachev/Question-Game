package com.example.question_game_api.score;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.example.question_game_api.user.User;


@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    public ScoreResponse addScore(ScoreRequestDto scoreRequestDto, Authentication connectedUser) {
        User user = ((User) connectedUser.getPrincipal());

        Score score = new Score();
        score.setPoints(scoreRequestDto.getPoints());
        score.setPlayedAt(LocalDateTime.now());
        score.setUser(user);

        Score addedScore = scoreRepository.save(score);

        ScoreResponse scoreResponse = new ScoreResponse();
        scoreResponse.setPoints(addedScore.getPoints());
        scoreResponse.setPlayedAt(addedScore.getPlayedAt());
        scoreResponse.setPlayerEmail(addedScore.getUser().getEmail());

        return scoreResponse;
    }
    
}
