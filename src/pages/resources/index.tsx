import { GetStaticProps } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";
import ResourceList from "@/components/ResourceList";

interface Resource {
  // 定义你的资源类型，例如：
  title: string;
  url: string;
  description: string;
}

interface ResourcesProps {
  resources: Resource[];
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
  const resources: Resource[] = JSON.parse(resourcesData);

  return {
    props: {
      resources,
    },
  };
};
