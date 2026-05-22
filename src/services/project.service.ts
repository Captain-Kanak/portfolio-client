import { env } from "@/env";
import { ApiResponse, Project } from "@/types";
import { DataFetcherResult } from "@/types/response.type";

const API_URL = env.API_URL;

export const projectService = {
  getProjects: async (): Promise<ApiResponse<Project>> => {
    try {
      const url = `${API_URL}/api/v1/projects`;

      const response = await fetch(url);

      if (!response.ok) {
        return {
          success: false,
          message: "Failed to get projects",
          data: null,
        };
      }

      const result: DataFetcherResult = await response.json();

      if (!result.success) {
        return {
          success: false,
          message: result.message,
          data: null,
        };
      }

      return {
        success: true,
        message: result.message,
        data: result.data.data,
        meta: result.data.meta,
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to get projects",
        data: null,
      };
    }
  },
};
