import { Trash2 } from "lucide-react";
import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { LastDays } from "./last-days";

interface GoalProps {
  goalId: string;
  title: string;
  onDeleteGoal?: () => void;
}

export function Goal({ goalId, title, onDeleteGoal }: GoalProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <span className="text-xs font-light">{title}</span>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Trash2 className="size-4 text-[#F85858]" />
          </AlertDialogTrigger>
          <AlertDialogContent className="w-72">
            <AlertDialogHeader>
              <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
              <AlertDialogDescription>
                Essa ação irá excluir todo seu processo do seu hábito.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                onClick={onDeleteGoal}
                className="bg-[#F85858] text-white"
              >
                Continuar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Link href={`/details/${goalId}`}>
        <LastDays goalId={goalId} />
      </Link>
    </div>
  );
}
