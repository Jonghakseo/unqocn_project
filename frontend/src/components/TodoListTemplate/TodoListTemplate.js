import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({ form, children }) => {
  //비 구조화 할당. (props)를 받아서 form과 children으로 쪼갰다
  return (
    <main className="todo-list-template">
      <div className="title">오늘 할 일</div>
      <section className="form-wrapper">{form}</section>
      <section className="todo-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
