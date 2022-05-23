import axios from 'axios'

const MENTOR_BASE_URL = 'http://localhost:8040/api/v1/mentors';

class MentorService {

    getAllMentors() {
        return axios.get(MENTOR_BASE_URL);
    }

    createMentor(mentor) {
        return axios.post(MENTOR_BASE_URL, mentor)
    }

    getMentorById(mentorId) {
        return axios.get(MENTOR_BASE_URL + '/' + mentorId);
    }

    updateMentor(mentor, mentorId) {
        return axios.put(MENTOR_BASE_URL + '/' + mentorId, mentor);
    }

    deleteMentor(mentorId) {
        return axios.delete(MENTOR_BASE_URL + '/' + mentorId);
    }

}

export default new MentorService();