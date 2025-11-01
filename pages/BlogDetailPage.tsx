import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import LazyImage from '../components/LazyImage';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-primary">Blog Post Not Found</h1>
        <p className="mt-4 text-lg text-text-dark">The article you are looking for does not exist.</p>
        <div className="mt-8">
            <Link to="/blog" className="inline-block px-8 py-3 rounded-md font-semibold text-center text-white bg-primary hover:bg-primary-hover transition-transform transform hover:scale-105 duration-300 shadow-lg">
                Back to Blog
            </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
        <header className="relative">
            <LazyImage src={post.imageUrl} alt={post.title} className="w-full h-96" imageClassName="object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-50"/>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-4 max-w-3xl">
                    <p className="text-lg font-semibold uppercase tracking-widest text-secondary">{post.category}</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold mt-2">{post.title}</h1>
                    <p className="mt-4 text-lg text-gray-300">{post.date}</p>
                </div>
            </div>
        </header>

        <div className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                 <Link to="/blog" className="text-primary font-semibold hover:underline mb-8 inline-block">
                  &larr; Back to All Articles
                </Link>
                <div 
                    className="prose prose-lg max-w-none text-text-dark"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </div>
    </div>
  );
};

export default BlogDetailPage;