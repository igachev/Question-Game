package com.example.question_game_api.auth;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class RegisterRequestDto {
    @NotBlank(message = "firstName is required")
    @NotEmpty(message = "firstName is required")
    @Size(min = 3,message = "firstName must be at least 3 characters long")
    @Size(max = 10,message = "firstName should be less than 10 characters long")
    private String firstName;
    @NotBlank(message = "lastName is required")
    @NotEmpty(message = "lastName is required")
    @Size(min = 5,message = "lastName must be at least 3 characters long")
    @Size(max = 15,message = "lastName should be less than 10 characters long")
    private String lastName;
    @NotEmpty(message = "email is required")
    @NotBlank(message = "email is required")
    private String email;
    @Size(min = 4,message = "password must be at least 4 characters long")
    private String password;

    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    
    @Override
    public String toString() {
        return "RegisterRequestDto [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
                + ", password=" + password + "]";
    }


}
