import { useEffect, useState } from "react";
import IAnswer from "../../interfaces/IAnswer";
import { url } from "../../url.json";
import axios from "axios";
import AnswerComponent from "../AnswerComponent/AnswerComponent";

function AnswerFetcher() {
  const [answers, setAnswers] = useState<IAnswer[]>([]);

  useEffect(() => {
    async function fetchAnswers() {
      try {
        const response = await axios.get(url);
        setAnswers(response.data);
      } catch (error) {
        console.error("Error fetching answers: ", error);
      }
    }
    fetchAnswers();
  }, []);
  return (
    <div>
      <h3>Answers here:</h3>
      <ul>
        {answers ? (
          answers.map((item, index) => (
            <AnswerComponent key={index} answer={item.answer} />
          ))
        ) : (
          <p>Answers loading...</p>
        )}
      </ul>
      <p></p>
    </div>
  );
}

export default AnswerFetcher;
