import { GetStaticProps } from "next";
import Head from "next/head";
import ArticleList from "@/components/ArticleList";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { EN_LANGUAGE } from "@/config";
import type { PostData } from "@/types/common";

interface HomeProps {
  allPostsData: PostData[];
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta
          name="description"
          content="Read our latest articles on web development, GitHub tips, and best practices."
        />
      </Head>
      <div className="container mx-auto py-12">
        <ArticleList articles={allPostsData} showMoreLink={false} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const postsDirectory = path.join(process.cwd(), "data", "md", EN_LANGUAGE);
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
    } as PostData;
  });

  return {
    props: {
      allPostsData,
    },
  };
};
