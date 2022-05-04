/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import todosStorages from './storages/todosStorages';

function App() {
  const today = new Date();
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);

  //.then(setTodos) 라고 코드를 작성했다. 데이터를 불러오고 나서 그 결과물을 setTodos의 함수인자로 넣어 호출하겠다는 의미이다.
  useEffect(() => {
    todosStorages.get().then(setTodos).catch(console.error);
  }, []);

  useEffect(() => {
    todosStorages.set(todos).catch(console.error);
  }, [todos]);

  //Math.max 함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환.
  //즉 insert하면 새로운 id값을 추가하기 위함.
  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    //todo.id와 매개변수 id의 값이 같으면 해당 todo의 done 값을 반대로 바꾼다.
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider>
      {/*  safeArea를 bottom 하단 부분에만 적용한다는 의미*/}
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length > 0 ? (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          ) : (
            <Empty />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.99)',
  },
  avoid: {
    flex: 1,
  },
});
export default App;
