import { TechnologyType } from "./enums";
import { Project } from "./project.type";

export interface Technology {
  id: string;
  name: string;
  icon: string | null;
  type: TechnologyType;
  isDeleted: boolean;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  projectsTechnologies?: ProjectTechnology[];
}

export interface ProjectTechnology {
  id: string;
  projectId: string;
  technologyId: string;
  isDeleted: boolean;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  project?: Project;
  technology?: Technology;
}
