//frontend/src/app.js
import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';
//리액트에서 UI와 기능들의 기본 단위는 컴포넌트
//자바스크립트의 함수와 개념적으로 유사하다
//props라는 임의의 입력을 받고, 어떻게 표시될지 기술한다

class App extends Component {

  async componentDidMount() {}
  // 컴포넌트 마운트 직후 실행(DOM 노드가 있어야 하는 초기화 작업은 여기서)

  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개1', checked: false },
      { id: 1, text: ' 리액트 소개2', checked: true },
      { id: 2, text: ' 리액트 소개3', checked: false },
    ],
  };

  handleChange = (e) => {
    // form 내의 데이터가 바뀔때마다 감지
    // state의 input 값을 갱신한다.
    this.setState({
      input: e.target.value, // input 의 다음 바뀔 값
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    //비구조화 할당으로 state의 input, todos 가져옴
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,//id 1추가
        text: input, 
        checked: false,//기본값은 체크 안된걸로 생성
      }),
    });
  };

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      // e.key에서 아스키 코드가 아닌 바로 enter인식 가능하네? 이 부분 찾아보자
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기

    nextTodos[index] = {//복사한 배열의 인덱스에 접근하고, 
      //기존 값들은 selected유지
      ...selected,
      //체크값만 기존 값의 반대로 설정하자.
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
      //그 다음 셋 스테이트로 덮어씌우기
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
      //filter로 콜백 반환 결과 true인 애들. 방금 받은 아이디가 아닌 애들만 남김
    });
  };

  render() {
    const { input, todos } = this.state;
    //const input = this.state.input; 위에꺼랑 동일한데 input이랑 todos 두 줄 써줘야함.
    //스테이트에서 input이랑 todo 비구조화 할당
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;
    // this.handleChange 처럼 계속 안 붙여줘도 됨. 비구조화 할당

    return (
      <TodoListTemplate form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
