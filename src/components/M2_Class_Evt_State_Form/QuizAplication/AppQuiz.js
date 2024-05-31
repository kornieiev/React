import React, { Component } from 'react';
import QuizForm from './QuizForm';
import SearchBar from './SearchBar';
import QuizList from './QuizList/QuizList';

import initialQuizItems from './quiz-items.json';

export default class AppQuiz extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: '',
      level: 'all',
    },
  };

  render() {
    const { quizItems } = this.state;
    console.log('quizItems', quizItems);

    return (
      <div>
        <QuizForm />
        <SearchBar />
        {quizItems.length > 0 && <QuizList items={quizItems} />}
      </div>
    );
  }
}
