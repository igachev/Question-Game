package com.example.question_game_api.user;

import java.security.Principal;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.question_game_api.question.Question;
import com.example.question_game_api.role.Role;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User implements UserDetails,Principal {

@Id
@GeneratedValue
private Integer id;
private String firstName;
private String lastName;
@Column(unique = true)
private String email;
private String password;
@ManyToMany(fetch = FetchType.EAGER)
private List<Role> roles;
@OneToMany(mappedBy = "creator")
private List<Question> questions;

public User() {

}

public User(Integer id, String firstName, String lastName, String email, String password, List<Role> roles) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.roles = roles;
}



public Integer getId() {
    return id;
}

public void setId(Integer id) {
    this.id = id;
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

public void setPassword(String password) {
    this.password = password;
}

public List<Role> getRoles() {
    return roles;
}

public void setRoles(List<Role> roles) {
    this.roles = roles;
}

@Override
public String getName() {
    return email;
}

@Override
public Collection<? extends GrantedAuthority> getAuthorities() {
    return roles
    .stream()
    .map((role) -> 
    new SimpleGrantedAuthority(role.getName()))
    .collect(Collectors.toList());
}

@Override
public String getPassword() {
    return password;
}

@Override
public String getUsername() {
    return email;
}

@Override
public boolean isAccountNonExpired() {
   return true;
}

@Override
public boolean isAccountNonLocked() {
    return true;
}

@Override
public boolean isCredentialsNonExpired() {
    return true;
}

@Override
public boolean isEnabled() {
    return true;
}

@Override
public String toString() {
    return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", password="
            + password + ", roles=" + roles + "]";
}


}
