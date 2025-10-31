
import React from 'react';
import { Link } from 'react-router-dom';

const mockPosts = [
  {
    id: 1,
    title: 'The Future of Data Management in Growing Businesses',
    excerpt: 'Explore the key trends and strategies for effective data management that can propel your business forward.',
    category: 'Data Analytics',
    date: 'October 26, 2023',
  },
  {
    id: 2,
    title: '5 Steps to Successful Business Transformation',
    excerpt: 'A practical guide for leaders looking to navigate the complexities of organizational change and achieve lasting success.',
    category: 'Strategy',
    date: 'October 15, 2023',
  },
  {
    id: 3,
    title: 'Why Operational Leadership is Key to a Resilient Supply Chain',
    excerpt: 'Discover how strong leadership can build a more agile, efficient, and resilient supply chain in today\'s volatile market.',
    category: 'Supply Chain',
    date: 'September 28, 2023',
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">Blog & Thought Leadership</h1>
          <p className="mt-4 text-xl text-dark-gray">
            Our blog provides industry insights, research updates, and practical advice on data management, business transformation, and operational leadership. Each post aims to educate, empower, and inspire decision-makers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 flex-grow">
                <p className="text-sm font-semibold text-secondary uppercase">{post.category}</p>
                <h3 className="mt-2 text-xl font-bold text-dark-gray">{post.title}</h3>
                <p className="mt-3 text-base text-gray-600">{post.excerpt}</p>
              </div>
              <div className="p-6 bg-gray-50 mt-auto">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <Link to="#" className="font-semibold text-primary hover:text-blue-800">
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
