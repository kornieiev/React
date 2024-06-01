import React from 'react';
import ResetButton from './ResetButton';

export default function SearchBar({
  filters: { topic, level },
  updateQuizeTopic,
  updateQuizeLevel,
  resetFilter,
}) {
  return (
    <div>
      <input
        type="text"
        value={topic}
        placeholder="Topic filter"
        onChange={e => {
          updateQuizeTopic(e.target.value);
        }}
      />
      <select
        value={level}
        onChange={e => {
          updateQuizeLevel(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <ResetButton resetFilter={resetFilter} />
    </div>
  );
}
