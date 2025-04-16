const Testimonials = () => {
  return (
    <div className="bg-white py-14 px-4">
      <h3 className="text-2xl font-bold text-center mb-10 text-gray-800">
        What Our Users Say
      </h3>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="text-gray-700">"The best movie app I’ve ever used!"</p>
          <p className="mt-4 font-semibold text-gray-800">– Ayesha</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="text-gray-700">"I can download and watch later. Love it!"</p>
          <p className="mt-4 font-semibold text-gray-800">– Tanvir</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="text-gray-700">"Simple, smooth, and packed with features."</p>
          <p className="mt-4 font-semibold text-gray-800">– Nabila</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="text-gray-700">"No annoying ads and great quality streams."</p>
          <p className="mt-4 font-semibold text-gray-800">– Zahin</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="text-gray-700">"It’s my go-to app for weekend movie nights!"</p>
          <p className="mt-4 font-semibold text-gray-800">– Farhana</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="text-gray-700">"Amazing interface and super easy to use."</p>
          <p className="mt-4 font-semibold text-gray-800">– Rifat</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="text-gray-700">"I love the recommendations. Always spot on!"</p>
          <p className="mt-4 font-semibold text-gray-800">– Mehzabien</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
