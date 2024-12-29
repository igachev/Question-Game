package com.example.question_game_api.score;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.question_game_api.user.User;

public interface ScoreRepository extends JpaRepository<Score,Integer> {

    List<Score> findAllByUserOrderByPointsDesc(User existingUser);

    @Query(value = """
        SELECT s.id,s.user_id,s.played_at,s.points
        FROM score s
        INNER JOIN (
            SELECT user_id, MAX(points) AS max_points
            FROM score
            GROUP BY user_id
        ) AS max_scores
        ON s.user_id = max_scores.user_id AND s.points = max_scores.max_points
        WHERE s.id = (
            SELECT id
            FROM score
            WHERE user_id = s.user_id AND points = max_scores.max_points
            ORDER BY played_at DESC
            LIMIT 1
        );
        """, nativeQuery = true)
    List<Score> findBestScoreForEachUser();
}
