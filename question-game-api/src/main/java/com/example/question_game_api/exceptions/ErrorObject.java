package com.example.question_game_api.exceptions;

import java.util.Set;

public class ErrorObject {
    
    private Set<String> errorList;
    private Integer statusCode;

    public Set<String> getErrorList() {
        return errorList;
    }
    public void setErrorList(Set<String> errorList) {
        this.errorList = errorList;
    }
    
    public Integer getStatusCode() {
        return statusCode;
    }
    public void setStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
    }

    @Override
    public String toString() {
        return "ErrorObject [errorList=" + errorList + ", statusCode=" + statusCode + "]";
    }


}
