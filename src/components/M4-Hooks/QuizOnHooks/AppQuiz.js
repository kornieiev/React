import React, { useEffect, useMemo, useState } from 'react';
import QuizForm from './QuizForm/QuizForm';
import SearchBar from './SearchBar';
import QuizList from './QuizList/QuizList';
import ClipLoader from 'react-spinners/ClipLoader';
import toast, { Toaster } from 'react-hot-toast';

import api from './services/api';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const initialFilter = {
  topic: '',
  level: '',
};

const lsKey = 'filters';

export default function AppQuizOnHooks() {
  const [quizItems, setQuizItems] = useState([]);
  const [filters, setFilters] = useState(() => {
    const savedFilters = window.localStorage.getItem(lsKey);
    if (savedFilters !== null) {
      return JSON.parse(savedFilters);
    }
    return initialFilter;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getQuizzes() {
      try {
        setIsError(false);
        setIsLoading(true);
        const allQuizzes = await api.getAllQuizzes();
        setQuizItems(allQuizzes);
      } catch (error) {
        console.log(`%c${error.message}`, 'color: red;');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getQuizzes();
  }, []);

  useEffect(() => {
    window.localStorage.setItem(lsKey, JSON.stringify(filters));
  }, [filters]);

  const updateQuizeTopic = newTopic => {
    const string = newTopic.trim();
    setFilters(prevFilters => ({ ...prevFilters, topic: string }));
  };

  const updateQuizeLevel = newLevel => {
    setFilters(prevFilters => ({ ...prevFilters, level: newLevel }));
  };

  const resetFilter = () => {
    setFilters(initialFilter);
  };

  const addNewQuiz = async newQuiz => {
    try {
      setIsError(false);
      setIsLoading(true);

      const addedQuiz = await api.addNewQuiz(newQuiz);
      // ❌❌❌ РАСПЫЛЯЕМ PREVSTATE ЧТО БЫ НЕ БЫЛО ЗАЦЫКЛИВАНИЯ ❌❌❌
      setQuizItems(prevItems => [...prevItems, addedQuiz]);
      // ❌❌❌ ТАК НЕ ДЕЛАТЬ!!! БУДЕТ ЗАЦЫКЛИВАНИЕ ❌❌❌
      // https://youtu.be/aa0qx6q174Y?t=3392
      // setQuizItems([...quizItems, addedQuiz]);
    } catch (error) {
      console.log(`%c${error.message}`, 'color: red;');
      setIsError(true);
      toast.error("This didn't work.");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteQuiz = async id => {
    try {
      setIsError(false);
      setIsLoading(true);
      const deletedQuiz = await api.deleteQuizById(id);
      setQuizItems(prevItems =>
        prevItems.filter(item => item.id !== deletedQuiz.id)
      );
    } catch (error) {
      console.log(`%c${error.message}`, 'color: red;');
      this.setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const visibleQuizItems = useMemo(() => {
    return quizItems.filter(item => {
      if (filters.level === 'all') {
        return item.topic.toLowerCase().includes(filters.topic.toLowerCase());
      }
      return (
        item?.topic?.toLowerCase().includes(filters.topic.toLowerCase()) &&
        item?.level?.toLowerCase().includes(filters.level.toLowerCase())
      );
    });
  }, [filters.level, filters.topic, quizItems]);

  return (
    <div>
      <QuizForm select={quizItems} onAdd={addNewQuiz} />
      <SearchBar
        filters={filters}
        updateQuizeTopic={updateQuizeTopic}
        updateQuizeLevel={updateQuizeLevel}
        resetFilter={resetFilter}
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
        <QuizList items={visibleQuizItems} onDelete={deleteQuiz} />
      )}
    </div>
  );
  // }
}
