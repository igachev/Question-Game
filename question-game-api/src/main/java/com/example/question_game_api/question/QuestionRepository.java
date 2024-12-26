package com.example.question_game_api.question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question,Integer> {
    boolean existsByIgnoreCaseQuestion(String question);

    // generates 10 unique random questions
    @Query(value = """
        SELECT *
        FROM question
        ORDER BY RANDOM()
        LIMIT 2;
       """, nativeQuery = true)
    List<Question> generateTenRandomQuestions();

}
