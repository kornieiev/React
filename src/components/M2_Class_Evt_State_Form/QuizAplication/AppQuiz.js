import React, { Component } from 'react';
import QuizForm from './QuizForm/QuizForm';
import SearchBar from './SearchBar';
import QuizList from './QuizList/QuizList';
import { nanoid } from 'nanoid';

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
    // console.log('id', id);

    this.setState(prevState => {
      return { quizItems: prevState.quizItems.filter(item => item.id !== id) };
    });
  };

  addNewQuiz = newQuiz => {
    console.log('newQuiz:', newQuiz);
    const quiz = { id: nanoid(), ...newQuiz };
    this.setState(prevState => {
      return {
        quizItems: [...prevState.quizItems, quiz],
      };
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
        <QuizForm select={this.state.quizItems} onAdd={this.addNewQuiz} />
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
