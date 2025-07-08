import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { ParsedUrlQuery } from "querystring";
import { EN_LANGUAGE } from "@/config";
import type { PostData } from "@/types/common";

interface PostParams extends ParsedUrlQuery {
  id: string;
}

interface IProps {
  postData: PostData;
}

export default function Post({ postData }: IProps) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta
          name="description"
          content={
            postData.description || `Read about ${postData.title} on ObsidianWorkflows`
          }
        />
      </Head>
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Breadcrumb navigation */}
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <Link className="hover:text-blue-600" href="/">
            Home
          </Link>
          <ChevronRight className="mx-2" size={16} />
          <Link className="hover:text-blue-600" href="/articles">
            Articles
          </Link>
          <ChevronRight className="mx-2" size={16} />
          <span className="text-gray-900">{postData.title}</span>
        </nav>

        {/* Meta information card */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          {postData.date && (
            <p className="text-gray-600 mb-2">
              {new Date(postData.date).toLocaleDateString()}
            </p>
          )}
          {postData.description && (
            <p className="text-gray-800">{postData.description}</p>
          )}
        </div>

        {/* Article content */}
        {postData.contentHtml && (
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        )}

        {/* Back to articles link */}
        <div className="mt-12">
          <Link
            className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-2"
            href="/articles"
          >
            <ArrowLeft size={20} />
            Back to articles
          </Link>
        </div>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), "data", "md", EN_LANGUAGE);
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  { postData: PostData },
  PostParams
> = async ({ params }) => {
  const id = params!.id;
  const fullPath = path.join(process.cwd(), "data", "md", EN_LANGUAGE, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      postData: {
        id,
        contentHtml,
        title: matterResult.data.title,
        description: matterResult.data.description,
        date: matterResult.data.date,
      },
    },
  };
};
