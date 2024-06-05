import React from 'react';
import QuizCard from '../QuizCard/QuizCard';
import { ItemWrapperLi, ListWrapperUl } from './QuizList.styled';

export default function QuizList({ items, onDelete }) {
  return (
    <ListWrapperUl>
      {items.map(item => (
        <ItemWrapperLi key={item.id} $level={item.level}>
          <QuizCard quiz={item} onDelete={onDelete} />
        </ItemWrapperLi>
      ))}
    </ListWrapperUl>
  );
}
