import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ExternalLink, Facebook } from "lucide-react";
import Image from "next/image";

const indigo600 = "#5D9CEC";

export default function Community() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex flex-col items-center justify-center py-20 bg-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/community/videos/0720(1) (1).mp4"
        >
        </video>
        {/* Decorative blobs */}
        {/* Main content */}
        <div className="flex flex-col items-center w-full px-4 relative z-10">
          <span className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-white/70 border border-gray-200 text-gray-600 text-sm font-medium shadow-sm backdrop-blur-md">
            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m13-6.13V7a4 4 0 00-3-3.87M9 4.13A4 4 0 004 7v3m16 0a4 4 0 01-3 3.87M4 10a4 4 0 003 3.87m0 0A4 4 0 0012 17a4 4 0 005-3.13M7 13.87V17m10-3.13V17" /></svg>
            Community
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-6 text-gray-800">
            Join Our Supportive <span className="text-blue-500">Parenting<br className="sm:hidden" /> Community</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mb-8">
            Connect with thousands of parents who understand your journey. Share experiences, celebrate milestones, and find support when you need it most.
          </p>
          <a
            href="https://www.facebook.com/groups/your-group-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold text-lg shadow-md transition-all duration-800 transform hover:scale-105"
          >
            <Facebook className="w-5 h-5 mr-2" />
            Join Facebook Group <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
} 