"use server";

import { technologyService } from "@/services/technology.service";
import { QueryParams } from "@/types";

export async function getTechnologies(params?: QueryParams) {
  return await technologyService.getTechnologies(params);
}
