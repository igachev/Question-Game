package com.example.question_game_api.score;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.question_game_api.user.User;
import com.example.question_game_api.user.UserRepository;


@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;
    @Autowired
    private UserRepository userRepository;

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

    public List<ScoreResponse> getUserScores(Authentication connectedUser) {
        User user = ((User) connectedUser.getPrincipal());

        User existingUser = userRepository.findByEmail(user.getEmail())
        .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        List<Score> userScores = scoreRepository.findAllByUserOrderByPointsDesc(existingUser);

        List<ScoreResponse> result = userScores.stream()
        .map((userScore) -> { 
            ScoreResponse scoreResponse = new ScoreResponse();
            scoreResponse.setPoints(userScore.getPoints());
            scoreResponse.setPlayedAt(userScore.getPlayedAt());
            scoreResponse.setPlayerEmail(userScore.getUser().getEmail());
            return scoreResponse;
        })
        .collect(Collectors.toList());

        return result;
    }

    public List<ScoreResponse> findBestScoreForEachUser() {
        List<Score> allScores = scoreRepository.findBestScoreForEachUser();

        List<ScoreResponse> bestScoreForEachUser = allScores.stream()
        .map((userScore) -> { 
            ScoreResponse scoreResponse = new ScoreResponse();
            scoreResponse.setPoints(userScore.getPoints());
            scoreResponse.setPlayedAt(userScore.getPlayedAt());
            scoreResponse.setPlayerEmail(userScore.getUser().getEmail());
            return scoreResponse;
        })
        .collect(Collectors.toList());

        return bestScoreForEachUser;
    }
    
}
