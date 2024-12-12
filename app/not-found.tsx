import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Error: 404 - The page you are looking for doesn't exist.",
};

export default function NotFoundPage() {
  return (
    <main id="main-content" className="h-screen px-4 grid place-items-center">
      <div className="text-center space-y-1 md:flex md:flex-row gap-5">
        <h1 className="text-2xl font-semibold md:pr-6 md:border-r-[1px] border-neutral-500">
          404
        </h1>
        <h2 className="text-lg">This page could not be found.</h2>
      </div>
    </main>
  );
}
