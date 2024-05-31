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
      level: '',
    },
  };

  updateQuizeTopic = newTopic => {
    console.log('newTopic', newTopic);
    this.setState(prevState => {
      return { filters: { ...prevState.filters, topic: newTopic } };
    });
  };

  updateQuizeLevel = newLevel => {
    console.log('newLevel', newLevel);
    this.setState(prevState => {
      return { filters: { ...prevState.filters, level: newLevel } };
    });
  };

  render() {
    const {
      quizItems,
      filters: { topic, level },
    } = this.state;
    console.log('quizItems', quizItems[0].topic);

    const visibleQuizItems = quizItems.filter(item => {
      console.log('item', item);

      return item.topic.toLowerCase().includes(topic.toLowerCase());
    });
    console.log('visibleQuizItems', visibleQuizItems);

    return (
      <div>
        <QuizForm />
        <SearchBar
          filters={this.state.filters}
          updateQuizeTopic={this.updateQuizeTopic}
          updateQuizeLevel={this.updateQuizeLevel}
        />
        {quizItems.length > 0 && <QuizList items={visibleQuizItems} />}
      </div>
    );
  }
}

// https://youtu.be/iu1Is5W--2s?t=4400
