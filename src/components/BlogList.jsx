const BlogList = () => {
    const blogs = [
      {
        title: "Mastering React: Best Practices",
        category: "React",
        description: "A guide to writing efficient and maintainable React code.",
        image: "https://source.unsplash.com/400x250/?technology,react",
        link: "#"
      },
      {
        title: "Tailwind CSS vs Bootstrap: Which is Better?",
        category: "CSS Frameworks",
        description: "Comparing two popular CSS frameworks for modern web development.",
        image: "https://source.unsplash.com/400x250/?css,design",
        link: "#"
      },
      {
        title: "MERN Stack Authentication Explained",
        category: "Full Stack",
        description: "Step-by-step guide to implementing authentication in MERN stack applications.",
        image: "https://source.unsplash.com/400x250/?code,mern",
        link: "#"
      },
      {
        title: "Optimizing React Performance",
        category: "Performance",
        description: "Learn techniques to improve the performance of your React applications.",
        image: "https://source.unsplash.com/400x250/?performance,react",
        link: "#"
      },
      {
        title: "Understanding useState and useEffect",
        category: "React Hooks",
        description: "Deep dive into React hooks and how they work.",
        image: "https://source.unsplash.com/400x250/?javascript,react",
        link: "#"
      },
      {
        title: "Building a Full-Stack App with Next.js",
        category: "Next.js",
        description: "Learn how to build a powerful web app using Next.js and Node.js.",
        image: "https://source.unsplash.com/400x250/?nextjs,web",
        link: "#"
      },
      {
        title: "State Management in React: Redux vs Context API",
        category: "State Management",
        description: "A comparison between Redux and Context API for managing global state.",
        image: "https://source.unsplash.com/400x250/?redux,contextapi",
        link: "#"
      },
      {
        title: "Deploying a MERN App on Vercel",
        category: "Deployment",
        description: "Step-by-step guide on how to deploy your MERN stack application on Vercel.",
        image: "https://source.unsplash.com/400x250/?deploy,cloud",
        link: "#"
      },
      {
        title: "GraphQL vs REST API: Which Should You Use?",
        category: "API Development",
        description: "Understand the differences between GraphQL and REST API and when to use each.",
        image: "https://source.unsplash.com/400x250/?graphql,restapi",
        link: "#"
      },
      {
        title: "Top 10 JavaScript ES6 Features You Should Know",
        category: "JavaScript",
        description: "Learn about the most useful ES6 features to enhance your JavaScript coding.",
        image: "https://source.unsplash.com/400x250/?javascript,code",
        link: "#"
      }
    ];
  
    return (
      <section className="py-16 px-8 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto text-center mt-20">
          <h2 className="text-4xl font-bold text-gray-800">Latest Blog Posts</h2>
          <p className="mt-2 text-gray-600">Stay updated with the latest trends and insights in web development.</p>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <img src={blog.image} alt={blog.title} className="rounded-t-lg w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-sm text-gray-500 uppercase font-semibold">{blog.category}</span>
                  <h3 className="mt-2 text-xl font-semibold text-gray-800">{blog.title}</h3>
                  <p className="mt-2 text-gray-600">{blog.description}</p>
                  <a href={blog.link} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogList;
  