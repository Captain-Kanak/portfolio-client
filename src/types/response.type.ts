export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  meta?: Meta;
}

export interface Meta {
  limit: number;
  total: number;
  currentPage: number;
  totalPages: number;
}

export interface DataFetcherResult {
  success: boolean;
  message: string;
  data: {
    data: any;
    meta?: {
      limit: number;
      total: number;
      currentPage: number;
      totalPages: number;
    };
  };
}

export interface QueryParams {
  page?: string;
  limit?: string;
  searchTerm?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  selects?: string;
  includes?: string;
  [key: string]: string | unknown | undefined;
}
