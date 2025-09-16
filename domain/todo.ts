export interface TodoElement {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export type TodoList = TodoElement[]