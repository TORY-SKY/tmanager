export type Category = "Work" | "Personal" | "Study";

export interface Task {
    id: string;
    title: string;
    dueDate: string;
    category: Category;

  }
