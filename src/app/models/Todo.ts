export interface Todo {
  // interface de tarefa
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  dueDate: Date;
  isComplete: boolean;
}
