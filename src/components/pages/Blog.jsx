const Blog = () => {
  const data = [
    {
      question:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      answer:
        "An access token is a short-lived credential used to access protected resources. It represents the authorization granted to a client to access specific resources and is used for authentication. And a refresh token is a long-lived credential used to obtain a new access token after the current one expires. It allows clients to request new access tokens without requiring the user to reauthenticate. Access tokens are typically stored on the client-side in memory or in secure storage mechanisms like browser storage (e.g., session storage or local storage) or in-memory storage within a mobile app. Refresh tokens need to be stored securely as they have a longer lifespan and provide ongoing access to resources.",
    },
    {
      question: "Compare SQL and NoSQL databases?",
      answer:
        "SQL Databases: Based on a structured data model with predefined schemas. Follow the ACID properties (Atomicity, Consistency, Isolation, Durability). Suitable for complex relationships and transactions. Well-suited for structured data and predefined schemas. NoSQL Databases: Have flexible and schema-less data models. Can handle unstructured, semi-structured, or structured data. Offer high scalability and performance for large-scale applications. Suitable for use cases where high availability, scalability, and flexibility are more important than strict consistency.",
    },
    {
      question: "What is express js? What is Next JS?",
      answer:
        "Express.js is a popular web application framework for Node.js. It provides a minimal and flexible set of features for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and server-side rendering. Next.js, on the other hand, is a framework built on top of React.js that focuses on server-side rendering and building static websites and server-rendered applications. It provides an opinionated structure and additional features to simplify the development of React-based applications.",
    },
    {
      question: "What is MongoDB aggregate and how does it work?",
      answer:
        "In MongoDB, the aggregate framework provides a powerful way to perform data aggregation operations on collections. It allows you to process and transform documents in the collection using a pipeline of stages. Each stage represents a specific operation or transformation applied to the documents. Pipeline Stages: The aggregation pipeline consists of multiple stages that are executed in sequence. Each stage takes the input documents and transforms them. Some common stages include $match, $group, $sort, $project, $limit, and $lookup. You can chain these stages together to perform complex operations. Data Flow: The input to the pipeline is typically the documents from a collection. Each stage takes the output of the previous stage as its input. The documents pass through the stages one by one, and at the end of the pipeline, the resulting documents are returned as the output. Data Transformation: Each stage performs a specific operation on the documents. For example, the $match stage filters documents based on specified criteria, the $group stage groups documents by a specific field and applies aggregate functions like sum, count, or average, and the $project stage shapes the output documents by including or excluding fields or creating computed fields.",
    },
  ];

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-10">
      <h1 className="text-center text-xl mb-5 uppercase bg-blueViolet py-10 text-white rounded-lg">
        Blog
      </h1>
      {data.map((e, index) => (
        <div key={index} className="p-5">
          <h1 className="text-xl font-semibold">{e.question}</h1>
          <p className="my-2">{e.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
