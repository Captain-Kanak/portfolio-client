import { Feedback } from "./feedback.type";
import { ProjectTechnology } from "./technology.type";

export type Project = {
  id: string;
  title: string;
  description: string;
  content: string;
  images: string[];
  features: string[];
  liveUrl: string;
  backendUrl: string;
  frontendUrl: string;
  views: number;
  isDeleted: boolean;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  technologies?: ProjectTechnology[];
  feedbacks?: Feedback[];
};
