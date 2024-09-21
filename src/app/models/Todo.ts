export interface Todo {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  dueDate: Date;
  isComplete: boolean;
}
