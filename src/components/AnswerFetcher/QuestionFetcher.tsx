import { useEffect, useState } from "react";
import IAnswer from "../../interfaces/IAnswer";
import { url } from "../../url.json";
import axios from "axios";

function AnswerFetcher() {
  const [answers, setAnswers] = useState<IAnswer[] | null>([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get(url);
        setAnswers(response.data);
      } catch (error) {
        console.error("Error fetching answers: ", error);
      }
    }
    fetchQuestions();
  }, []);
  return (
    <div>
      <h3>Answers here:</h3>
      <p></p>
    </div>
  );
}

export default AnswerFetcher;
