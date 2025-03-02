"use client";

import { useGoalStore } from "@/store/goal-store";

interface DetailsTitleProps {
  goalId: string;
}

export function DetailsTitle({ goalId }: DetailsTitleProps) {
  const { goals } = useGoalStore();

  const title = goals.find((item) => item.id === goalId)?.title;

  return <h1>{title}</h1>;
}
