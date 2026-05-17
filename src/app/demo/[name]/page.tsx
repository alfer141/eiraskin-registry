import { notFound } from "next/navigation";

import { demos } from "@/app/demo/[name]/index";

import { Renderer } from "@/app/demo/[name]/renderer";
import { getRegistryItem, getRegistryItems } from "@/lib/registry";

export async function generateStaticParams() {
  const demoNames = Object.keys(demos);
  const registryNames = getRegistryItems().map((c) => c.name);
  const all = Array.from(new Set([...demoNames, ...registryNames]));
  return all.map((name) => ({ name }));
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const component = getRegistryItem(name);

  if (!component) {
    notFound();
  }

  const demo = demos[name];
  const components = demo?.components;

  return (
    <div className="flex h-[100vh] w-full flex-col gap-4 bg-card">
      {!demo ? (
        <div className="flex h-full w-full items-center justify-center p-8 text-center text-muted-foreground">
          <div>
            <p className="font-medium text-foreground">{component.title}</p>
            <p className="mt-2 text-sm">
              No interactive demo yet. Use the install command on the component
              page to add it to your project.
            </p>
          </div>
        </div>
      ) : (
        components &&
        Object.entries(components).map(([key, node]) => (
          <div className="relative w-full" key={key}>
            <Renderer>{node}</Renderer>
          </div>
        ))
      )}
    </div>
  );
}
