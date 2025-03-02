"use client";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { GoalProps, GoalStateData } from "../@types/goal";

interface GoalState {
  goals: GoalProps[];
  addGoal: (newGoal: GoalProps) => void;
  removeGoal: (goalId: string) => void;
  updateGoalStatus: (goalStateData: GoalStateData) => void;
}

export const useGoalStore = create<GoalState>()(
  persist(
    (set) => ({
      goals: [],

      addGoal: (newGoal) =>
        set((state) => ({
          goals: [...state.goals, newGoal],
        })),

      removeGoal: (goalId) =>
        set((state) => ({
          goals: state.goals.filter((goal) => goal.id !== goalId),
        })),

      updateGoalStatus: ({ id, dateString, nextState }) =>
        set((state) => ({
          goals: state.goals.map((goal) =>
            goal.id === id
              ? {
                  ...goal,
                  progress: { ...goal.progress, [dateString]: nextState },
                }
              : goal
          ),
        })),
    }),
    {
      name: "@goals", // Nome do item no armazenamento
      storage: createJSONStorage(() => localStorage), // Salva no localStorage
    }
  )
);
