package com.target.springbootmentorspage.service;

import com.target.springbootmentorspage.exception.ResourceNotFoundException;
import com.target.springbootmentorspage.model.Mentor;
import com.target.springbootmentorspage.repository.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MentorServiceImplement implements MentorService{

    @Autowired
    private MentorRepository mentorRepository;

    @Override
    public Mentor saveMentor(Mentor mentor) {
        return mentorRepository.save(mentor);
    }

    @Override
    public List<Mentor> getAllMentors() {
        return mentorRepository.findAll();
    }

    @Override
    public Mentor getMentorById(long id) {
        return mentorRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Mentor with id = " + id + " not found"));
    }

    @Override
    public Mentor updateMentor(Mentor mentor, long id) {
        Mentor existingMentor = mentorRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Mentor with id = " + id + " not found"));

        existingMentor.setFirstName(mentor.getFirstName());
        existingMentor.setLastName(mentor.getLastName());
        existingMentor.setDesignation(mentor.getDesignation());
        existingMentor.setEmail(mentor.getEmail());
        existingMentor.setSessionName(mentor.getSessionName());
        existingMentor.setSessionLink(mentor.getSessionLink());

        mentorRepository.save(existingMentor);
        return existingMentor;
    }

    @Override
    public void deleteMentor(long id) {
        mentorRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Mentor with id = " + id + " not found"));
        mentorRepository.deleteById(id);
    }
}
