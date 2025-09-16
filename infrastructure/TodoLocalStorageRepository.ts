import { TodoElement, TodoList } from "../domain/todo";
import { TodoRepositoryInterface } from "../domain/todoRepository";
import { LocalStorageRepository } from "./localStorageRepository";



export class TodoLocalStorageRepository implements TodoRepositoryInterface {
  private localStorageRepository;
  todoList: TodoList = [
    {
      id: "1",
      title: "Test title",
      description: "Test description",
      completed: false
    },
    {
      id: "2",
      title: "Hexagonal Architecture course",
      description: "Finish my Hexagonal Architecture course.",
      completed: false
    },
    {
      id: "3",
      title: "Finished task",
      description: "",
      completed: true
    },
  ]
  constructor() {
    this.localStorageRepository = new LocalStorageRepository();
  }

  addTodo(todo: TodoElement) {
    this.todoList = [...this.todoList, todo];
  };

  markAsCompleted(todoId: string) {
    this.todoList = this.todoList.map(element => element.id === todoId ? {...element, completed: true} : element);
  };

  getAllTodos() {
    return this.todoList;
  };

  save(todoList: TodoList) {
    this.localStorageRepository.save(todoList, "todoList")
  };
}