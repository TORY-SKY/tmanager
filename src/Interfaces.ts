export type Category = "Work" | "Personal" | "Study";

export interface Task {
    id: string;
    title: string;
    dueDate: string;
    description: string;
    completed: boolean;

  }
