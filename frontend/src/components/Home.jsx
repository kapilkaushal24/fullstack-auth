const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Welcome to the Home Page
        </h1>
        <p className="text-gray-600 text-center text-lg mb-6">
          Login Successful
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-300">
            Explore Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
