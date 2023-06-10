const Newsletter = () => {
  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-32">
      <div className="text-center text-gray-400">
        <h1>
          <span>Subscribe to our</span>
          <br />
          <span className="text-5xl font-bold text-blueViolet">Newsletter</span>
        </h1>
        <p>TO be updated with all the latest trends and products</p>
      </div>
      <div className="text-center my-8">
        <input
          type="text"
          className="border-none outline-none p-3 rounded-l-lg"
          placeholder="Your Email"
        />
        <button className="border-none outline-none p-3 bg-blueViolet text-white rounded-r-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
