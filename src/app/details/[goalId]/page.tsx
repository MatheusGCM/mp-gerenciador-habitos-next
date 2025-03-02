import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { DetailsCalendar } from "./components/details-calendar";
import { DetailsTitle } from "./components/details-title";

interface DetailsPageProps {
  params: Promise<{ goalId: string }>;
}

const Details = async ({ params }: DetailsPageProps) => {
  const { goalId } = await params;

  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-10">
      <DetailsTitle goalId={goalId} />
      <div className="space-y-2">
        <Link href={"/"}>
          <button className="flex justify-center items-center gap-2 text-sm">
            <ArrowLeft className="size-4" />
            <p>voltar</p>
          </button>
        </Link>

        <DetailsCalendar goalId={goalId} />
      </div>
    </div>
  );
};

export default Details;
