import React from "react";
// import PawImage from '../assets/paw.jpg';

export default function Footer() {
  return (
    <footer
      className="bg-pink-200 bg-cover bg-center bg-no-repeat text-gray-800 py-10 px-5"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        
       

        {/* Text */}
        <p className="font-bold text-sm sm:text-base md:text-lg text-center">
          Pet Care – Pet Winter Care <br />
          Keeping your furry friends cozy since 2025
        </p>
        <p className="text- sm:text-sm md:text-base text-center">
          © {new Date().getFullYear()} WarmPaws. All rights reserved.
        </p>

        {/* Social Icons */}
        <nav>
          <div className="flex gap-4 justify-center">
            {/* Facebook */}
            <a href="#" className="text-blue-500 hover:text-blue-600 transition rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M22.675 0h-21.35C.597 0 0 .592 0 1.326v21.348C0 23.408.597 24 1.325 24H12.82v-9.294H9.692V11.02h3.128V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.686h-3.123V24h6.116C23.403 24 24 23.408 24 22.674V1.326C24 .592 23.403 0 22.675 0z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="text-blue-400 hover:text-blue-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.903 4.903 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 21.543a13.933 13.933 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" className="text-red-500 hover:text-red-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M23.498 6.186a2.994 2.994 0 00-2.11-2.115C19.553 3.5 12 3.5 12 3.5s-7.553 0-9.389.571a2.994 2.994 0 00-2.11 2.115C0 8.024 0 12 0 12s0 3.976.501 5.814a2.994 2.994 0 002.11 2.115c1.836.571 9.389.571 9.389.571s7.553 0 9.389-.571a2.994 2.994 0 002.11-2.115C24 15.976 24 12 24 12s0-3.976-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
