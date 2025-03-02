"use client";

import { ptBR } from "date-fns/locale";
import { Check, ChevronLeft, ChevronRight, Circle, X } from "lucide-react";
import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useGoalStore } from "@/store/goal-store";

interface DetailsCalendarProps {
  goalId: string;
}

export function DetailsCalendar({ goalId }: DetailsCalendarProps) {
  const [date, setDate] = useState<Date[] | undefined>([]);

  const { goals, updateGoalStatus } = useGoalStore();

  const progress = goals.find((item) => item.id === goalId)?.progress;

  function toggleDayState(date: Date) {
    if (date.getTime() > Date.now()) {
      return; // Não podemos marcar datas futuras
    }
    if (!progress) return;
    const dateString = date.toISOString(); // Usamos a data como chave
    const currentState = progress[dateString] || "default";

    // Define o próximo estado
    const nextState =
      currentState === "default"
        ? "success"
        : currentState === "success"
        ? "fail"
        : "default";

    updateGoalStatus({ id: goalId, dateString, nextState });
  }

  if (!progress) return;

  return (
    <Calendar
      showOutsideDays={false}
      mode="multiple"
      locale={ptBR}
      selected={date}
      onSelect={setDate}
      className="bg-[#262626] rounded-xl p-5"
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
        DayContent: ({ date, activeModifiers }) => {
          const dateString = date.toISOString();
          const dayState = progress[dateString] || "default";

          return (
            <div
              className={`flex flex-col items-center justify-center p-2`}
              onClick={() => toggleDayState(date)}
            >
              <span
                className={`font-normal aria-selected:opacity-100 text-[#737373] text text-xs hover:text-white duration-200 ${
                  activeModifiers.today && "text-white"
                }`}
              >
                {date.getDate()}
              </span>
              {dayState === "default" && (
                <Circle className="scale-50" fill="#D9D9D9" />
              )}
              {dayState === "success" && <Check className="text-[#45EDAD]" />}
              {dayState === "fail" && <X className="text-[#F85858]" />}
            </div>
          );
        },
      }}
    />
  );
}
