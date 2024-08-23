import IAnswer from "../../interfaces/IAnswer";

function AnswerComponent({answer} : IAnswer) {
    return (
        <div>
            <li>
                {answer.id}
                {answer.name}
            </li>
        </div>
    )
}

export default AnswerComponent;