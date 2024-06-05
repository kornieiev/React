import React, { Component } from 'react';
import QuizForm from './QuizForm/QuizForm';
import SearchBar from './SearchBar';
import QuizList from './QuizList/QuizList';
// import { nanoid } from 'nanoid';
import ClipLoader from 'react-spinners/ClipLoader';
import toast, { Toaster } from 'react-hot-toast';

import api from './services/api';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

// import initialQuizItems from './quiz-items.json';

const initialFilter = {
  topic: '',
  level: '',
};

const lsKey = 'filters';

export default class AppQuiz extends Component {
  state = {
    quizItems: [],
    filters: initialFilter,
    isLoading: false,
    isError: false,
  };

  async componentDidMount() {
    const savedFilters = JSON.parse(localStorage.getItem(lsKey));
    if (savedFilters) {
      this.setState({ filters: savedFilters });
    }

    try {
      this.setState({ isError: false });
      this.setState({ isLoading: true });
      const allQuizzes = await api.getAllQuizzes();
      this.setState({ quizItems: allQuizzes });
    } catch (error) {
      console.log(`%c${error.message}`, 'color: red;');
      this.setState({ isError: true });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      localStorage.setItem(lsKey, JSON.stringify(this.state.filters));
    }
  }

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

  addNewQuiz = async newQuiz => {
    try {
      this.setState({ isError: false });
      this.setState({ isLoading: true });
      const addedQuiz = await api.addNewQuiz(newQuiz);
      this.setState(prevState => {
        return { quizItems: [...prevState.quizItems, addedQuiz] };
      });
    } catch (error) {
      console.log(`%c${error.message}`, 'color: red;');
      this.setState({ isError: true });
      toast.error("This didn't work.");
    } finally {
      this.setState({ isLoading: false });
    }
  };

  deleteQuiz = async id => {
    try {
      this.setState({ isError: false });
      this.setState({ isLoading: true });
      const deletedQuiz = await api.deleteQuizById(id);

      this.setState(prevState => {
        return {
          quizItems: prevState.quizItems.filter(item => item.id !== id),
        };
      });
    } catch (error) {
      console.log(`%c${error.message}`, 'color: red;');
      this.setState({ isError: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const {
      quizItems,
      filters: { topic, level },
      isLoading,
      isError,
    } = this.state;

    const visibleQuizItems = quizItems.filter(item => {
      if (level === 'all') {
        return item.topic.toLowerCase().includes(topic.toLowerCase());
      }
      return (
        item?.topic?.toLowerCase().includes(topic.toLowerCase()) &&
        item?.level?.toLowerCase().includes(level.toLowerCase())
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
        {isError && <h3>SOS!!! ERROR!!! RESTART THE PAGE!!!</h3>}
        <Toaster />
        {isLoading && (
          <ClipLoader
            // color={color}
            loading={isLoading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
        {quizItems.length > 0 && (
          <QuizList items={visibleQuizItems} onDelete={this.deleteQuiz} />
        )}
      </div>
    );
  }
}

//
//
//
//
//
