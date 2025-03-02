"use client";

import { Check, Circle, X } from "lucide-react";

import { dosis } from "@/fonts/dosis";
import { useGoalStore } from "@/store/goal-store";

interface LastDaysProps {
  goalId: string;
}

export function LastDays({ goalId }: LastDaysProps) {
  const { goals } = useGoalStore();

  const findGoal = goals.find((item) => item.id === goalId);

  // Calcula a data de 7 dias atrás
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const currentWeekDay = weekDays[today.getDay()];

  const lastDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - i);
    const key = date.toISOString().split("T")[0] + "T03:00:00.000Z";

    return {
      date: key,
      weekDay: weekDays[date.getDay()],
      status: findGoal?.progress[key] || "default",
    };
  });
  return (
    <div className="flex flex-row-reverse bg-[#262626] rounded-[8px] gap-6 px-3 pt-1">
      {lastDays.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <span
            className={`${dosis.className} ${
              currentWeekDay === item.weekDay && "font-extrabold"
            } font-light text-sm`}
          >
            {item?.weekDay}
          </span>
          <div className="py-6">
            {item?.status === "default" && (
              <Circle className="scale-50" fill="#D9D9D9" />
            )}
            {item?.status === "success" && <Check className="text-[#45EDAD]" />}
            {item?.status === "fail" && <X className="text-[#F85858]" />}
          </div>
        </div>
      ))}
    </div>
  );
}
