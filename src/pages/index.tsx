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
        <title>ObsidianHub - The Ultimate Obsidian Plugins & Themes Platform</title>
        <meta
          name="description"
          content="Discover the most useful Obsidian plugins, themes, and workflows. Enhance your knowledge management efficiency and build your perfect digital garden."
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
              ObsidianHub
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Discover the Best Obsidian Plugins, Themes & Workflows
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              A curated resource hub for knowledge management enthusiasts to build their perfect digital garden
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/articles"
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z" />
                </svg>
                Browse Tutorials
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-400 hover:bg-purple-400 hover:text-slate-900 rounded-xl text-purple-400 font-semibold transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Discover Plugins
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
              Why Choose ObsidianHub?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We carefully curate and organize the most useful Obsidian resources to help you enhance your knowledge management efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Curated Plugin Library</h3>
              <p className="text-slate-600">
                Hand-picked quality plugin recommendations, each with detailed usage instructions and configuration guides
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Practical Tutorials</h3>
              <p className="text-slate-600">
                Complete tutorial system from beginner to advanced, helping you unlock Obsidian&apos;s full potential
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Active Community</h3>
              <p className="text-slate-600">
                Connect with fellow knowledge management enthusiasts, share workflows and exchange insights
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
