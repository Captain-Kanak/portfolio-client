"use server";

import { projectService } from "@/services/project.service";
import { QueryParams } from "@/types";

export async function getProjects(params?: QueryParams) {
  return await projectService.getProjects(params);
}
