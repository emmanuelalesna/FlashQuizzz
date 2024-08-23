import React, { useEffect, useState } from "react";
import axios from "axios";
import IQuestion from "../../interfaces/IQuestion";
import { url } from "../../url.json";
import QuestionComponent from "../QuestionComponent/QuestionComponent";

function QuestionFetcher() {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get(url);
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    }
    fetchQuestions();
  }, []);

  return (
    <div>
      <ul>
        {questions ? (
          questions.map((item, index) => (
            <QuestionComponent key={index} question={item.question} />
          ))
        ) : (
          <p>Questions loading...</p>
        )}
      </ul>
    </div>
  );
}

export default QuestionFetcher;
