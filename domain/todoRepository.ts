import { TodoElement, TodoList } from "./todo";

export interface TodoRepositoryInterface {
  todoList: TodoList; // Not sure if i need it here

  // Should this repo have these functions or should this be in the useCase?
  addTodo: (todo: TodoElement) => void;
  markAsCompleted: (todoId: string) => void;
  getAllTodos: () => TodoList;
  save: (todoList: TodoList) => void;
}