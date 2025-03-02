"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGoalStore } from "@/store/goal-store";
const formSchema = z.object({
  goal: z.string().min(3),
});

type FormSchema = z.infer<typeof formSchema>;

export default function Register() {
  const { addGoal } = useGoalStore();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log("Habito cadastrado", data);
    addGoal({
      id: String(Date.now()),
      title: data.goal,
      progress: {},
    });
    router.back();
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className={`text-4xl`}>Novo hábito</h1>
      <form className="w-full space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <Input
          className={`w-60 m-auto ${
            errors.goal?.message && "border-red-600 focus:border-red-600 "
          }`}
          placeholder="Digite aqui..."
          {...register("goal")}
        />
        <div className="flex flex-col gap-3 px-28">
          <Button className={`text-xl bg-[#45EDAD]`} type="submit">
            cadastrar
          </Button>

          <Button
            className={`text-xl text-[#F85858]`}
            type="button"
            variant="ghost"
            onClick={() => router.back()}
          >
            cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}
