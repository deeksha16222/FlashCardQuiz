import "./App.css";
import React,{useState} from 'react'
import List from "./List"

function App() {
  const[flashcards,setFlashCards] = useState(SAMPLE_FLASHCARDS)
  return (
    <div>
      <List flashcards={flashcards}/>
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2+2?",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "What is question?",
    answer: "answer2",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 3,
    question: "What is question?",
    answer: "answer3",
    options: ["2", "3", "4", "5"],
  },
];

export default App;
