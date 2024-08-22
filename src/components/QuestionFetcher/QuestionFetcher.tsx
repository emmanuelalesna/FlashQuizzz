import React, { useEffect, useState } from "react";
import axios from "axios";
import IQuestion from "../../interfaces/IQuestion";
import { url } from "../../url.json";

function QuestionFetcher() {
  const [questions, setQuestions] = useState<IQuestion[] | null>([]);

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
      <h3></h3>
    </div>
  );
}

export default QuestionFetcher;
