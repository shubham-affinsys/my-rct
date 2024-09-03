import { CodeBlock, dracula } from "react-code-blocks";
import React, { useState, useEffect, memo } from 'react';
import Paginate from "../util/Paginate";
// Memoized Todo Component
const Todo = memo(({ todo_title, todo_description, user, is_done }) => {
  return (
    <CodeBlock
      text={`"${todo_title}"\n"${todo_description}"\nuser="${user}"\nis_done=${is_done}`}
      language="javascript"
      showLineNumbers={false}
      theme={dracula}
    />
  );
});

function TodoCard() {
  const base_url = 'https://my-dj.vercel.app/vege/todo/';
  const [todos, setTodos] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  const fetchTodo1 = async (url) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'token 9962edaa0003ac29e71e0972963544ae828e44db',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const { previous, next } = data.links;
      console.log(data)
      setTodos(data.results);
      setNextPage(next);
      setPreviousPage(previous);
    } catch (error) {
      console.error('Error while fetching todos:', error);
    }
  };
  const fetchTodo2 = async (url) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'token 9962edaa0003ac29e71e0972963544ae828e44db',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const { previous, next } = data.links;
      console.log(data)
      setTodos(data.results);
      setNextPage(next);
      setPreviousPage(previous);
    } catch (error) {
      console.error('Error while fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodo1(base_url);
    fetchTodo2(base_url);
  }, []);

  return (
    <>
      <h1>Todo Logs</h1>
      <ul>
      {/* <Paginate itemsPerPage={3}> */}
        {Array.isArray(todos) && todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.uid}>
              <Todo
                uid={todo.uid}
                user={todo.user}
                todo_title={todo.todo_title}
                todo_description={todo.todo_description}
                is_done={todo.is_done}
              />
              <br />
            </li>
          ))
        ) : (
          <li>No Todo available</li>
        )}
        {/* </Paginate> */}
      </ul>
      <br />
      <button onClick={() => fetchTodo1(previousPage)} disabled={previousPage === null}>Previous</button>
      <button onClick={() => fetchTodo1(nextPage)} disabled={nextPage === null}>Next</button>
    </>
  );
}

export default memo(TodoCard);
