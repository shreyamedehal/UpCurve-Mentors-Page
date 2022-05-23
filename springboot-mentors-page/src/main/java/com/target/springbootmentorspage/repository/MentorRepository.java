package com.target.springbootmentorspage.repository;

import com.target.springbootmentorspage.model.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository
public interface MentorRepository extends JpaRepository<Mentor, Long> {

}
