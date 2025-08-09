import React, { useState, useEffect, ErrorBoundary } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import NewsTicker from './components/NewsTicker';
import NewsCarousel from './components/NewsCarousel';
import TrendingNews from './components/TrendingNews';
import SidebarAd from './components/SidebarAd';
import RashifalWidget from './components/RashifalWidget';
import Footer from './components/Footer';
import MoreNews from './components/MoreNews';
import Reel from "./components/Reel";


// A simple Error Boundary component for debugging
class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex items-center justify-center min-h-screen bg-red-100 text-red-800 p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong.</h1>
            <p className="mb-2">We're sorry for the inconvenience. Please try refreshing the page.</p>
            {this.state.error && (
              <details className="text-left bg-red-50 p-3 rounded-md mt-4">
                <summary>Error Details</summary>
                <pre className="whitespace-pre-wrap break-words text-sm">
                  {this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}


function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  const handleAcceptCookies = () => {
    setShowCookieConsent(false);
    console.log("Cookies accepted.");
    // In a real app, you would set a cookie or local storage item here
  };

  const handleDeclineCookies = () => {
    setShowCookieConsent(false);
    console.log("Cookies declined.");
    // In a real app, you might redirect or limit functionality
  };

  useEffect(() => {
    console.log("App component mounted.");
    // Check if Tailwind CSS is loaded by checking a Tailwind utility class on an element
    const testDiv = document.createElement('div');
    testDiv.className = 'flex'; // A simple Tailwind class
    document.body.appendChild(testDiv);
    const isTailwindLoaded = getComputedStyle(testDiv).display === 'flex';
    document.body.removeChild(testDiv);
    if (!isTailwindLoaded) {
      console.warn("Tailwind CSS might not be loading correctly. Check your index.css and tailwind.config.js.");
    } else {
      console.log("Tailwind CSS appears to be loaded.");
    }

    // Check Font Awesome
    const faIcon = document.createElement('i');
    faIcon.className = 'fas fa-check';
    document.body.appendChild(faIcon);
    const faComputedStyle = getComputedStyle(faIcon);
    if (faComputedStyle.fontFamily.includes('Font Awesome')) {
      console.log("Font Awesome appears to be loaded.");
    } else {
      console.warn("Font Awesome might not be loading correctly. Check your public/index.html.");
    }
    document.body.removeChild(faIcon);

  }, []);


  return (
    <AppErrorBoundary>
      <div className="font-inter antialiased bg-gray-100">
        {/* Cookie Consent Banner */}
        {showCookieConsent && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50 shadow-lg">
            <p className="text-sm text-center md:text-left mb-2 md:mb-0 md:mr-4">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleAcceptCookies}
                className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md transition-colors text-sm"
              >
                Accept
              </button>
              <button
                onClick={handleDeclineCookies}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors text-sm"
              >
                Decline
              </button>
            </div>
          </div>
        )}

        <TopBar />
        <Header />
        <div className="container mx-auto px-4 md:px-8 mt-4">
          {/* Banner Ad */}
          <div className="bg-red-100 border border-red-300 text-red-800 p-3 rounded-lg text-center mb-6 shadow-sm">
            <p className="text-lg font-semibold">
              <i className="fas fa-bullhorn mr-2"></i>
              ॐ नमः शिवाय! हरिद्वार में बड़ा वैष्णव यज्ञ और बाबा बैजनाथ धाम
            </p>
            <p className="text-sm">की पावन यात्रा में सभी श्रद्धालुओं का</p>
            <p className="text-2xl font-bold text-red-900 mt-2">हार्दिक स्वागत एवं जोहार</p>
            <img
              src="https://placehold.co/970x90/F44336/ffffff?text=Banner+Ad"
              alt="Promotional Banner"
              className="w-full h-auto mt-3 rounded-md"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/970x90/F44336/ffffff?text=Banner+Ad"; }}
            />
          </div>

          <NewsTicker />

          <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Main Content Area */}
            <section className="lg:col-span-2">
                   <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">
                  <i className="fas fa-th-list mr-2 text-red-800"></i> Top News
                  </h2>
                <NewsCarousel />

             {/* More News Section Below Carousel */}
                 <div className="mt-10">
                 <MoreNews />
                     </div>
             </section>
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <TrendingNews />
              <div className="mt-6">
                <Reel/>
                <SidebarAd imageUrl="https://placehold.co/300x250/B71C1C/ffffff?text=Ad+1" altText="Advertisement" />
              </div>
              <RashifalWidget />
            </aside>
          </main>
        </div>
        <Footer />
      </div>
    </AppErrorBoundary>
  );
}

export default App;
