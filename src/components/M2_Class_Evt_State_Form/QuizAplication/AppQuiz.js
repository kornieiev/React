import React, { Component } from 'react';
import QuizForm from './QuizForm';
import SearchBar from './SearchBar';
import QuizList from './QuizList/QuizList';

import initialQuizItems from './quiz-items.json';

const initialFilter = {
  topic: '',
  level: '',
};

export default class AppQuiz extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: initialFilter,
  };

  updateQuizeTopic = newTopic => {
    this.setState(prevState => {
      return { filters: { ...prevState.filters, topic: newTopic } };
    });
  };

  updateQuizeLevel = newLevel => {
    this.setState(prevState => {
      return { filters: { ...prevState.filters, level: newLevel } };
    });
  };
  resetFilter = () => {
    this.setState({
      filters: initialFilter,
    });
  };

  deleteQuiz = id => {
    console.log('id', id);

    this.setState(prevState => {
      return { quizItems: prevState.quizItems.filter(item => item.id !== id) };
    });
  };

  render() {
    const {
      quizItems,
      filters: { topic, level },
    } = this.state;

    const visibleQuizItems = quizItems.filter(item => {
      if (level === 'all') {
        return item.topic.toLowerCase().includes(topic.toLowerCase());
      }
      return (
        item.topic.toLowerCase().includes(topic.toLowerCase()) &&
        item.level.toLowerCase().includes(level.toLowerCase())
      );
    });

    return (
      <div>
        <QuizForm />
        <SearchBar
          filters={this.state.filters}
          updateQuizeTopic={this.updateQuizeTopic}
          updateQuizeLevel={this.updateQuizeLevel}
          resetFilter={this.resetFilter}
        />
        {quizItems.length > 0 && (
          <QuizList items={visibleQuizItems} onDelete={this.deleteQuiz} />
        )}
      </div>
    );
  }
}
