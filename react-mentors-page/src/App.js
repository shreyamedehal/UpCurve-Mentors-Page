import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import ListMentors from './components/ListMentors';
import AddMentor from './components/AddMentor';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<ListMentors />}></Route>
            <Route path='/mentors' element={<ListMentors />}></Route>
            <Route path='/add-mentor' element={<AddMentor />}></Route>
            <Route path='/edit-mentor/:id' element={<AddMentor />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
