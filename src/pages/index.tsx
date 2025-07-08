import Head from "next/head";
import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";
import ResourceList from "@/components/ResourceList";
import ArticleList from "@/components/ArticleList";
import matter from "gray-matter";
import { EN_LANGUAGE } from "@/config";
import Link from "next/link";

interface HomeProps {
  resources: any[];
  allPostsData: any[];
}

export default function Home({ resources, allPostsData }: HomeProps) {
  return (
    <>
      <Head>
        <title>Obsidian Workflows: Actionable Guides, Plugins & Themes</title>
        <meta
          name="description"
          content="Unlock Obsidian's true potential. We provide in-depth guides, step-by-step workflows, and curated plugins to help you build a powerful, personalized second brain."
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-2xl mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Go Beyond Notes.<br />Build Your Second Brain.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Stop collecting plugins. Start building systems. We provide proven, step-by-step guides to help you create a powerful and personalized knowledge management workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/articles"
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Explore All Workflows
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-400 hover:bg-purple-400 hover:text-slate-900 rounded-xl text-purple-400 font-semibold transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                View Plugin Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose Obsidian Workflows?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We don&apos;t just list resources. We build proven systems and share honest insights from real-world experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Opinionated Plugin Reviews</h3>
              <p className="text-slate-600">
                We don&apos;t just list plugins. We share our honest opinions, what we love, what we don&apos;t, and show you exactly how to integrate them into powerful, real-world workflows.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">From Beginner to Architect</h3>
              <p className="text-slate-600">
                Whether you&apos;re a writer, a student, or just trying to manage your PDFs, our guides will help you design and build a knowledge system that grows with you.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Join 10,000+ Builders</h3>
              <p className="text-slate-600">
                Subscribe to our weekly newsletter and join a community of thinkers dedicated to building their second brain. Get our best workflows and insights, for free.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Articles */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-slate-600">
              Explore the latest Obsidian tips, plugin reviews, and workflow guides
            </p>
          </div>
          <ArticleList articles={allPostsData} />
          <div className="text-center mt-12">
            <Link
              href="/articles"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors duration-200"
            >
              View All Articles
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const resourcesPath = path.join(
    process.cwd(),
    "data",
    "json",
    "resources.json"
  );
  const resources = JSON.parse(fs.readFileSync(resourcesPath, "utf8"));

  // Get latest articles
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
    };
  }).sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  }).slice(0, 6);

  return {
    props: {
      resources,
      allPostsData,
    },
  };
};
