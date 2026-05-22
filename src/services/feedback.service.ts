import { env } from "@/env";
import { ApiResponse, Feedback } from "@/types";
import { DataFetcherResult } from "@/types/response.type";

const API_URL = env.API_URL;

export const feedbackService = {
  addFeedback: async (payload: Partial<Feedback>) => {
    try {
      const url = `${API_URL}/api/v1/feedbacks`;

      const response = await fetch(url, {
        method: "POST",
        headers: {},
        body: "",
      });

      if (!response.ok) {
        return {
          success: false,
          message: "Failed to get feedbacks",
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
        message: "Failed to get feedbacks",
        data: null,
      };
    }
  },
  getFedbacks: async (): Promise<ApiResponse<null>> => {
    try {
      const url = `${API_URL}/api/v1/feedbacks`;

      const response = await fetch(url);

      if (!response.ok) {
        return {
          success: false,
          message: "Failed to get feedbacks",
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
        message: "Failed to get feedbacks",
        data: null,
      };
    }
  },
};
