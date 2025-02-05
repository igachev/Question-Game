package com.example.question_game_api.auth;

public class RegisterResponse {

private String firstName;
private String lastName;
private String email;

public RegisterResponse() { }

public RegisterResponse(String firstName, String lastName, String email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

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

@Override
public String toString() {
    return "RegisterResponse [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + "]";
}

}
