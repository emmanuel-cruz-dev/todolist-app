import type { ReactNode } from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: ReactNode;
}
