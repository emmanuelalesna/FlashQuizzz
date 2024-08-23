import IQuestion from "../../interfaces/IQuestion";

function QuestionComponent({ question }: IQuestion) {
  return (
    <div>
      <li>
        <h3>Question:</h3>
        <p>{question.id}</p>
        <p>{question.category}</p>
        <p>{question.name}</p>
      </li>
    </div>
  );
}

export default QuestionComponent;
