import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="w-full h-full text-center p-8">
      <h1 className="text-2xl">Remix Boilerplate</h1>
    </div>
  );
}
