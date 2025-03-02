import { dosis } from "@/fonts/dosis";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${dosis.className} flex flex-1 h-screen justify-center`}>
      {children}
    </div>
  );
}
