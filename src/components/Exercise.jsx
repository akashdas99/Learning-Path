import { useState } from "react";
import Score from "./Score";

const Exercise = ({ mcqs, updateCompletion }) => {
  const initalState = Array.from(Array(mcqs.length));
  const [answer, setAnswer] = useState(initalState);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const chooseAnswer = (i, ans) => {
    const newState = answer.map((prevAns, index) =>
      i === index ? ans : prevAns
    );
    setAnswer(newState);
  };

  const handleSubmit = () => {
    let newScore = 0;
    for (let i = 0; i < answer.length; i++)
      if (answer[i] === mcqs[i].correct) newScore++;
    setScore(newScore);
    setShowScore(true);
    if (100 * (newScore / answer.length) >= 75) updateCompletion();
  };
  return (
    <section>
      <div className="font-bold text-xl ">
        Exercise (Score 75% or more to complete this chapter)
      </div>
      {mcqs.map(({ id, question, answers, correct }) => (
        <div key={id}>
          <div className="pt-6">
            <span>{id}. </span>
            {question}
          </div>
          <div className="cursor-pointer mx-4">
            {answers.map((ans, index) => (
              <div
                key={index}
                onClick={() => chooseAnswer(id - 1, ans)}
                className={
                  ans === answer[id - 1]
                    ? "bg-indigo-500 text-slate-100 rounded px-2  "
                    : "rounded px-2 hover:decoration-indigo-500 hover:underline"
                }
              >
                {index + 1}
                {". "}
                {ans}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        className="w-[50%] mx-[25%] hover:bg-indigo-500 hover:text-white text-indigo-500 font-semibold px-2 mt-2 rounded-lg border-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {showScore && (
        <Score
          score={100 * (score / answer.length)}
          close={() => setShowScore(false)}
        />
      )}
    </section>
  );
};

export default Exercise;
