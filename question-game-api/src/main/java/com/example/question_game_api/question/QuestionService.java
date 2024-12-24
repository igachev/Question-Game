package com.example.question_game_api.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.example.question_game_api.exceptions.QuestionAlreadyExists;
import com.example.question_game_api.user.User;

@Service
public class QuestionService {

    private QuestionRepository questionRepository;

    public QuestionService() { }

    @Autowired
    public QuestionService(QuestionRepository questionRepository) {
       this.questionRepository = questionRepository;
    }
    
    public QuestionResponse createQuestion(
        QuestionRequestDto questionRequestDto,
        Authentication connectedUser
        ) {

       boolean questionAlreadyExists = questionRepository.existsByIgnoreCaseQuestion(questionRequestDto.getQuestion());
       
       if(questionAlreadyExists) {
        throw new QuestionAlreadyExists("This question already exists in the database!");
       }
    

        User currentUser = (User) connectedUser.getPrincipal();
        System.out.println("current user " + currentUser);
        Question question = new Question();
        question.setQuestion(questionRequestDto.getQuestion());
        question.setAnswers(questionRequestDto.getAnswers());
        question.setCorrectAnswer(questionRequestDto.getCorrectAnswer());
        question.setCreator(currentUser);

        var addedQuestion = questionRepository.save(question);

        QuestionResponse questionResponse = new QuestionResponse();
        questionResponse.setId(addedQuestion.getId());
        questionResponse.setQuestion(addedQuestion.getQuestion());
        questionResponse.setAnswers(addedQuestion.getAnswers());
        questionResponse.setCorrectAnswer(addedQuestion.getCorrectAnswer());
        questionResponse.setCreatorId(addedQuestion.getCreator().getId());

        return questionResponse;
    }


}
