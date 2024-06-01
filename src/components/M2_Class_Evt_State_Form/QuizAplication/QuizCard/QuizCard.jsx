import React from 'react';

export default function QuizCard({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) {
  return (
    <div>
      <p>{topic}</p>
      <div>
        <p>
          <b>Level:</b>
          {level}
        </p>
        <p>
          <b>Time:</b>
          {time}
        </p>
        <p>
          <b>Questions:</b>
          {questions}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
