import { Project } from "./project.type";

export type Feedback = {
  id: string;
  feedback: string;
  email: string;
  projectId: string;
  isDeleted: boolean;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  project?: Project;
};
