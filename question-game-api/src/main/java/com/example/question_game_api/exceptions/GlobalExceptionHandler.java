package com.example.question_game_api.exceptions;

import java.util.HashSet;
import java.util.Set;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;



@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorObject> handleException(
        MethodArgumentNotValidException ex,
        WebRequest webRequest
    ) {
        ErrorObject errorObject = new ErrorObject();
        errorObject.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());

        Set<String> errors = new HashSet<>();
        ex.getBindingResult().getAllErrors()
        .forEach((err) -> errors.add(err.getDefaultMessage()));

        errorObject.setErrorList(errors);
        
        return new ResponseEntity<ErrorObject>(errorObject,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<ErrorObject> handleException(
        UserAlreadyExistsException ex,
        WebRequest webRequest
    ) {
        ErrorObject errorObject = new ErrorObject();
        errorObject.setStatusCode(HttpStatus.BAD_REQUEST.value());

        Set<String> errors = new HashSet<>();
        errors.add(ex.getMessage());
        errorObject.setErrorList(errors);

        return new ResponseEntity<ErrorObject>(errorObject,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ErrorObject> handleException(
        BadCredentialsException ex,
        WebRequest webRequest
    ) {
        ErrorObject errorObject = new ErrorObject();
        errorObject.setStatusCode(HttpStatus.FORBIDDEN.value());

        Set<String> errors = new HashSet<>();
        errors.add("Invalid username / password");
        errorObject.setErrorList(errors);

        return new ResponseEntity<ErrorObject>(errorObject,HttpStatus.FORBIDDEN);
    }

   @ExceptionHandler(QuestionAlreadyExists.class)
    public ResponseEntity<ErrorObject> handleException(
        QuestionAlreadyExists ex,
        WebRequest webRequest
    ) {
        ErrorObject errorObject = new ErrorObject();

        errorObject.setStatusCode(HttpStatus.CONFLICT.value());

        Set<String> errors = new HashSet<>();
        errors.add(ex.getMessage());
        errorObject.setErrorList(errors);

        return new ResponseEntity<ErrorObject>(errorObject,HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NonExistentQuestionException.class)
    public ResponseEntity<ErrorObject> handleException(
        NonExistentQuestionException ex,
        WebRequest webRequest
    ) {
        ErrorObject errorObject = new ErrorObject();

        errorObject.setStatusCode(HttpStatus.NOT_FOUND.value());

        Set<String> errors = new HashSet<>();
        errors.add(ex.getMessage());
        errorObject.setErrorList(errors);

        return new ResponseEntity<ErrorObject>(errorObject,HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorObject> handleException(
        UserNotFoundException ex,
        WebRequest webRequest
    ) {
        ErrorObject errorObject = new ErrorObject();

        errorObject.setStatusCode(HttpStatus.NOT_FOUND.value());

        Set<String> errors = new HashSet<>();
        errors.add(ex.getMessage());
        errorObject.setErrorList(errors);

        return new ResponseEntity<ErrorObject>(errorObject,HttpStatus.NOT_FOUND);
    }

}
