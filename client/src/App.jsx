import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-6 tracking-tight">Voice2Web</h1>
      <p className="text-lg text-center max-w-2xl mb-10 text-gray-600">
        Empowering small businesses with AI-generated websites through a simple voice interface.
      </p>
      
      <div className="flex gap-6">
        <Link 
          to="/onboarding" 
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Business Owner
        </Link>
        <Link 
          to="/consumer" 
          className="px-6 py-3 bg-white text-blue-600 border border-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition"
        >
          Consumer Portal
        </Link>
      </div>
    </div>
  );
}

function BusinessOnboarding() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Business Onboarding</h2>
      <p className="text-gray-600 mb-6">Describe your business to generate your website.</p>
      {/* Voice input component will go here */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-md">
        <button className="w-full py-4 bg-red-500 text-white rounded-full font-bold flex items-center justify-center gap-2">
          <span>🎤</span> Tap to Speak
        </button>
      </div>
    </div>
  );
}

function ConsumerPortal() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Consumer Portal</h2>
      <p className="text-gray-600 mb-6">Discover local businesses near you.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
            <h3 className="font-semibold text-lg">Local Business {i}</h3>
            <p className="text-sm text-gray-500 mb-2">Category • 1.2 km away</p>
            <Link to="#" className="text-blue-500 text-sm font-medium hover:underline">View Website</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<BusinessOnboarding />} />
        <Route path="/consumer" element={<ConsumerPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
