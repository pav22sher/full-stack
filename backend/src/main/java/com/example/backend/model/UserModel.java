package com.example.backend.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

/**
 * Пользователь
 */
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "user", schema = "public")
public class UserModel {
    @Id
    @GeneratedValue
    @Column(name = "user_id")
    Long id;
    @Column(name = "user_login")
    String login;
    @Column(name = "user_password")
    String password;
    @Column(name = "user_first_name")
    String firstName;
    @Column(name = "user_last_name")
    String lastName;
    @Column(name = "user_email")
    String email;
}
