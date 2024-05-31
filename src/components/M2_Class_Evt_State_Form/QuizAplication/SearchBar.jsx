import React from 'react';

export default function SearchBar({
  filters: { topic, level },
  updateQuizeTopic,
  updateQuizeLevel,
}) {
  return (
    <div>
      <input
        type="text"
        value={topic}
        placeholder="Topic filter"
        onChange={e => {
          console.log('e:', e.target.value);
          updateQuizeTopic(e.target.value);
        }}
      />
      <select
        value={topic}
        onChange={e => {
          console.log('e:', e.target.value);
          updateQuizeLevel(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
}
