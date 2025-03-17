'use client';
import { BlogPosts } from "../components/blog-posts";
import CTA from "../components/chatgpt-integration/CTA";

export default function BlogPage() {
    return (
        <div className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center py-12 text-sky-50">Latest Insights & Articles</h1>
        <p className="text-xl text-center text-gray-400 mb-12">Explore cutting-edge AI and blockchain topics, handpicked for you</p>
      </div>
        <div>
            <BlogPosts />
            <CTA />
        </div>
        </div>
    );
}