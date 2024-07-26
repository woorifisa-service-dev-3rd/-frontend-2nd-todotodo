import React from "react";
import TodoItemV2 from "./TodoItemV2";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { DropComponent } from './DropComponent';

const TodoBody = ({ todos, setTodos, onUpdate, onDelete }) => {

  const onDragStart = ({draggableId}) => {
    console.log("draggableId",draggableId);
  }
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    console.log("draggableId", draggableId);

    const _todos = Array.from(todos);
    const [targetTodo] = _todos.splice(source.index, 1);
    _todos.splice(destination.index, 0, targetTodo);
    setTodos(_todos);
  }

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd} className='px-0 my-8' >
      <DropComponent droppableId='droppable'>
      {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={`px-0 my-8 ${snapshot.isDraggingOver ? 'bg-lightblue' : 'bg-lightgrey'} p-2 `}
            >
          {todos.map((todo,idx) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={idx}
                >
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        className={`p-2 mb-2 ${snapshot.isDragging ? 'bg-white shadow-lg' : ''}`}
                        {...provided.dragHandleProps}
                      >
                        <TodoItemV2
                          todo={todo}
                          key={todo.id}
                          onUpdate={onUpdate}
                          onDelete={onDelete}
                        />
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
      </DropComponent>
    </DragDropContext>
  )
};

export default TodoBody;
