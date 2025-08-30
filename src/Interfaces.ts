export type Category = "Work" | "Personal" | "Study";

export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
    category: Category;

  }
