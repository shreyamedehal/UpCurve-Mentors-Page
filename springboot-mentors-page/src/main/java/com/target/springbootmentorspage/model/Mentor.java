package com.target.springbootmentorspage.model;

import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name= "mentor")
public class Mentor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;

    @Column(name="firstname")
    private String firstName;

    @Column(name="lastname")
    private String lastName;

    @Column(name="designation")
    private String designation;

    @Column(name = "email")
    private String email;

    @Column(name="sessionName")
    private String sessionName;

    @Column(name="sessionLink")
    private String sessionLink;
}