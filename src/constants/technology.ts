import { TechnologyType } from "@/types/enums";

interface GroupMeta {
  title: string;
  types: TechnologyType[];
}

export const SKILL_GROUPS: GroupMeta[] = [
  {
    title: "Core Languages",
    types: [TechnologyType.LANGUAGE],
  },
  {
    title: "Frontend Engineering",
    types: [TechnologyType.FRONTEND, TechnologyType.MOBILE],
  },
  {
    title: "Backend & APIs",
    types: [
      TechnologyType.BACKEND,
      TechnologyType.API,
      TechnologyType.AUTH,
      TechnologyType.ORM,
    ],
  },
  {
    title: "Data & Systems",
    types: [TechnologyType.DATABASE, TechnologyType.SYSTEM],
  },
  {
    title: "DevOps & Cloud",
    types: [
      TechnologyType.DEVOPS,
      TechnologyType.CLOUD,
      TechnologyType.TESTING,
    ],
  },
  {
    title: "Tools & AI",
    types: [TechnologyType.TOOL, TechnologyType.AI],
  },
];
