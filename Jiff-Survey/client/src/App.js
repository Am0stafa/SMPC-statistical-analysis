import './App.css';
import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jiff from 'jiff/lib/jiff-client';
const SERVER_URL = 'http://localhost:3001';
const mpc = jiff.make_jiff(SERVER_URL, { crypto_provider: true });

function App() {
  const questions = [
    ["I feel interested", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel distressed", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel excited", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel upset", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel strong", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel guilty", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel scared", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel hostile", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel enthusiastic", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel proud", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel irritable", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel alert", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel ashamed", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel inspired", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel nervous", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel determined", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel attentive", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel jittery", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel active", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']],
    ["I feel afraid", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']]
];


const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionText, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionText]: value
    }));
  };

  const allQuestionsAnswered = () => {
    for (let question of questions) {
      if (!answers[question[0]]) return false;
    }
    return true;
  }

  const handleSubmit = async () => {
    if (!allQuestionsAnswered()) {
      toast.error("Please answer all questions before submitting.");
      return;
    }

    try {
      const sharedAnswers = {};
      for (let question in answers) {
          sharedAnswers[question] = mpc.share(answers[question])[1];
      }

      await fetch(`${SERVER_URL}/submit`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(sharedAnswers)
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="panas-container">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/stats">Statistics</Link>
      </nav>

      {questions.map((question, idx) => (
        <div key={idx} className="question">
          <label>{question[0]}</label>
          <select
            value={answers[question[0]] || ''}
            onChange={e => handleAnswerChange(question[0], e.target.value)}
          >
            <option value="">Select</option>
            {question[1].map((option, optionIdx) => (
              <option key={optionIdx} value={option}>{option}</option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <ToastContainer />
    </div>
  );

}

export default App;
