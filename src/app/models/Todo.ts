export interface Todo {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  dueDate: Date;
  isComplete: boolean;
}
