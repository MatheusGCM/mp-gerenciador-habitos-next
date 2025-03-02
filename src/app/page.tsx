"use client";

import Link from "next/link";

import { Goal } from "@/components/goal";
import { Button } from "@/components/ui/button";
import { dosis } from "@/fonts/dosis";
import { useGoalStore } from "@/store/goal-store";

export default function Home() {
  const { goals, removeGoal } = useGoalStore();
  return (
    <div className="flex flex-1 flex-col items-center justify-between gap-16 py-8">
      <div className="space-y-5">
        {goals.length > 0 ? (
          goals.map((item) => {
            return (
              <Goal
                key={item.id}
                goalId={item.id}
                title={item.title}
                onDeleteGoal={() => removeGoal(item.id)}
              />
            );
          })
        ) : (
          <p className={`${dosis.className} text-2xl w-52 text-center`}>
            você não tem hábitos cadastrados
          </p>
        )}
      </div>

      <Link href="/register" className="px-20">
        <Button
          className={`text-xl bg-[#45EDAD] w-full rounded-[8px]`}
          type="button"
        >
          Novo habito
        </Button>
      </Link>
    </div>
  );
}
