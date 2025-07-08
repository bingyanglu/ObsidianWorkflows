import { GetStaticProps } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";
import ResourceList from "@/components/ResourceList";
import type { Plugin } from "@/types/common";

interface ResourcesProps {
  resources: Plugin[];
}

export default function Resources({ resources }: ResourcesProps) {
  return (
    <>
      <Head>
        <title>Resources</title>
        <meta
          name="description"
          content="Explore our curated list of resources for web development, GitHub, and more."
        />
      </Head>
      <div className="container mx-auto py-12">
        <ResourceList resources={resources} showMoreLink={false} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<ResourcesProps> = async () => {
  const resourcesPath = path.join(
    process.cwd(),
    "data",
    "json",
    "resources.json"
  );
  const resourcesData = fs.readFileSync(resourcesPath, "utf8");
  const resources: Plugin[] = JSON.parse(resourcesData);

  return {
    props: {
      resources,
    },
  };
};
