package com.target.springbootmentorspage.controller;

import com.target.springbootmentorspage.model.Mentor;
import com.target.springbootmentorspage.service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/mentors")
public class MentorController {

    @Autowired
    private MentorService mentorService;

    // build create mentor REST API
    @PostMapping()
    public ResponseEntity<Mentor> saveMentor(@RequestBody Mentor mentor){
        return new ResponseEntity<Mentor>(mentorService.saveMentor(mentor), HttpStatus.CREATED);
    }

    // build get all mentors REST API
    @GetMapping
    public List<Mentor> getAllMentor(){
        return mentorService.getAllMentors();
    }

    // build get mentor by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Mentor> getMentorById(@PathVariable("id") long mentorId){
        return new ResponseEntity<Mentor>(mentorService.getMentorById(mentorId), HttpStatus.OK);
    }

    // build update mentor REST API
    @PutMapping("{id}")
    public ResponseEntity<Mentor> updateMentor(@PathVariable("id") long id, @RequestBody Mentor mentor){
        return new ResponseEntity<Mentor>(mentorService.updateMentor(mentor, id), HttpStatus.OK);
    }

    // build delete mentor REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteMentor(@PathVariable("id") long id){
        mentorService.deleteMentor(id);
        return new ResponseEntity<String>("Mentor deleted successfully!", HttpStatus.OK);
    }
}
