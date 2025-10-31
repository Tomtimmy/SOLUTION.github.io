import React, { useState, useMemo } from 'react';
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
  {
    id: 4,
    title: 'Unlocking Insights with Business Intelligence Tools',
    excerpt: 'A deep dive into the best BI tools on the market and how to choose the right one for your organization.',
    category: 'Data Analytics',
    date: 'September 10, 2023',
  },
];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => ['All', ...new Set(mockPosts.map(p => p.category))], []);

  const filteredPosts = useMemo(() => {
    return mockPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="py-16 sm:py-24 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">Blog & Thought Leadership</h1>
          <p className="mt-4 text-xl text-dark-gray">
            Our blog provides industry insights, research updates, and practical advice on data management, business transformation, and operational leadership.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex justify-center flex-wrap gap-2 mt-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-dark-gray hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
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
            ))
          ) : (
            <p className="md:col-span-2 lg:col-span-3 text-center text-lg text-gray-600">
              No articles found. Try adjusting your search or filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;