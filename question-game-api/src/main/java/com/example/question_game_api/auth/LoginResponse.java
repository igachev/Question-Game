package com.example.question_game_api.auth;

public class LoginResponse {
    
    private String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "LoginResponse [token=" + token + "]";
    }

    
}
