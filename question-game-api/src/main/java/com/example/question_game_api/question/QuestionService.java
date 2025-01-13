package com.example.question_game_api.question;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.example.question_game_api.exceptions.NonExistentQuestionException;
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

    public List<QuestionResponse> generateTenRandomQuestions() {
        List<Question> questions = questionRepository.generateTenRandomQuestions();

        List<QuestionResponse> result = questions.stream()
        .map((question) -> {
        QuestionResponse questionResponse = new QuestionResponse();
        questionResponse.setId(question.getId());
        questionResponse.setQuestion(question.getQuestion());
        questionResponse.setAnswers(question.getAnswers());
        questionResponse.setCorrectAnswer(question.getCorrectAnswer());
        questionResponse.setCreatorId(question.getCreator().getId());
        return questionResponse;
        })
        .collect(Collectors.toList());

        return result;
    }

    public QuestionResponse getQuestionById(Integer questionId) {
        Question question = questionRepository.findById(questionId)
        .orElseThrow(() -> new NonExistentQuestionException("no such question exists!"));

        QuestionResponse questionResponse = new QuestionResponse();
        questionResponse.setId(question.getId());
        questionResponse.setQuestion(question.getQuestion());
        questionResponse.setAnswers(question.getAnswers());
        questionResponse.setCorrectAnswer(question.getCorrectAnswer());
        questionResponse.setCreatorId(question.getCreator().getId());
        
        return questionResponse;
    }

    public QuestionResponse editQuestion(Integer questionId, QuestionRequestDto questionRequestDto) {
        Question question = questionRepository.findById(questionId)
        .orElseThrow(() -> new NonExistentQuestionException("no such question exists!"));

        question.setQuestion(questionRequestDto.getQuestion());
        question.setAnswers(questionRequestDto.getAnswers());
        question.setCorrectAnswer(questionRequestDto.getCorrectAnswer());
        
        Question editedQuestion = questionRepository.save(question);

        QuestionResponse questionResponse = new QuestionResponse();
        questionResponse.setId(editedQuestion.getId());
        questionResponse.setQuestion(editedQuestion.getQuestion());
        questionResponse.setAnswers(editedQuestion.getAnswers());
        questionResponse.setCorrectAnswer(editedQuestion.getCorrectAnswer());
        questionResponse.setCreatorId(editedQuestion.getCreator().getId());

        return questionResponse;
    }

    public String deleteQuestion(Integer questionId) {
        Question question = questionRepository.findById(questionId)
        .orElseThrow(() -> new NonExistentQuestionException("no such question exists!"));

        questionRepository.delete(question);
        return "the question was deleted successfully";
    }

    public List<QuestionResponse> getAllQuestions() {
        List<QuestionResponse> result = questionRepository.findAll()
        .stream()
        .map((question) -> {
        QuestionResponse questionResponse = new QuestionResponse();
        questionResponse.setId(question.getId());
        questionResponse.setQuestion(question.getQuestion());
        questionResponse.setAnswers(question.getAnswers());
        questionResponse.setCorrectAnswer(question.getCorrectAnswer());
        questionResponse.setCreatorId(question.getCreator().getId());
        return questionResponse;
        })
        .collect(Collectors.toList());

        return result;
    }


}
