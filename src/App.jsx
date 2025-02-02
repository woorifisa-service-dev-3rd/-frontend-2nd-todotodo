import { useState } from "react";
import TodoBody from "./components/todos/TodoBody";
import TodoHeader from "./components/todos/TodoHeader";
import DefaultLayout from "./layouts/DefaultLayout";

const dummyTodos = [
  {
    id: 1,
    title: "React 공부",
    summary: "React를 공부한다.",
    category: "TODO",
  },
  {
    id: 2,
    title: "점심 먹기",
    summary: "점심을 먹는다.",
    category: "PROGRESS",
  },
  {
    id: 3,
    title: "커피 마시기",
    summary: "커피를 마신다.",
    category: "DONE",
  },
];

function App() {
  const [todos, setTodos] = useState(dummyTodos);
  const [selectedCategory, setFilter] = useState("ALL");

  // Todo 등록 기능, 파라미터로 새롭게 추가할 Todo 객체를 받음
  const addTodoHandler = ({ title, summary, category }) => {
    // id값을 추가해서 Todo 등록
    const newTodo = {
      id: self.crypto.randomUUID(), // Web Crypto API
      title,
      summary,
      category,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  // Todo 수정 기능, 파라미터로 업데이트할 Todo 객체를 받음
  const updateTodoHandler = (updateTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updateTodo.id ? updateTodo : todo
    );
    setTodos(updatedTodos);
  };

  // Todo 삭제 기능
  const deleteTodoHandler = (id) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  // Todo 필터링 기능
  const filterTodos = () =>
    selectedCategory === "ALL"
      ? todos
      : todos.filter((todo) => todo.category === selectedCategory);
  // 필터링된 Todo 리스트(배열)
  const filteredTodos = filterTodos();

  return (
    <>
      <DefaultLayout>
        <header>
          <div className="flex justify-center">
            <a to="/" className="flex">
              <h1 className="py-8 text-red-200 max-w-max text-7xl">todos</h1>
            </a>
          </div>
        </header>
        <section className="max-w-xl m-4 mx-auto">
          <TodoHeader
            onAdd={addTodoHandler}
            category={selectedCategory}
            onFilter={setFilter}
          />
          <TodoBody
            todos={filteredTodos}
            setTodos={setTodos}
            onUpdate={updateTodoHandler}
            onDelete={deleteTodoHandler}
          />
        </section>
      </DefaultLayout>
    </>
  );
}

export default App;
