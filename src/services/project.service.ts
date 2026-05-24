import { env } from "@/env";
import { ApiResponse, Project } from "@/types";
import { DataFetcherResult, QueryParams } from "@/types/response.type";

const API_URL = env.API_URL;

export const projectService = {
  getProjects: async (
    params?: QueryParams,
  ): Promise<ApiResponse<Project[]>> => {
    try {
      const url = new URL(`${API_URL}/api/v1/projects`);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (!value) return;
          if (Array.isArray(value)) {
            value.forEach((v) => {
              url.searchParams.append(key, String(v));
            });
            return;
          }

          url.searchParams.append(key, String(value));
        });
      }

      const response = await fetch(url.toString());

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
