import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-y-4">
      <Image src="/logo.svg" width={120} height={120} className="animate-pulse duration-700" alt="Convex Logo" />
    </div>
  );
}
