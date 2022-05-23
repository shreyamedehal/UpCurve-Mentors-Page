package com.target.springbootmentorspage.service;

import com.target.springbootmentorspage.model.Mentor;

import java.util.List;

public interface MentorService {
    Mentor saveMentor(Mentor mentor);
    List<Mentor> getAllMentors();
    Mentor getMentorById(long id);
    Mentor updateMentor(Mentor mentor, long id);
    void deleteMentor(long id);

}
