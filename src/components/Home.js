import React from "react";
import { Link } from "react-router-dom";
import Weather from "./Weather";
import Movies from "./Movies";
import News from "./News";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center ">
        <header className="">
          <h1 className="text-3xl">Collections</h1>
        </header>
        <div class="flex flex-wrap mx-4 transition ">
          <div class="w-full md:w-1/3 px-4 py-6">
            <div class="bg-slate-100 rounded-lg shadow-lg overflow-hidden duration-300 ease-in-out hover:translate-y-1 hover:scale-100 ...">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-4 text-center">
                  Weather Forecast
                </h3>
                <p class="text-gray-700 mb-4">
                  Our weather app is a comprehensive and user-friendly tool that
                  provides accurate and up-to-date weather information to users.
                  The app features a clean and intuitive interface that makes it
                  easy to access the information you need.With our app, you can
                  view the current weather conditions,including temperature,
                  humidity,wind speed,and more,for your location or
                  any other location of your choice.You'll always be in the know when of the weather.
                </p>
                <p className="text-sky-600 underline text-center py-3  hover:bg-sky-500 hover:text-white duration-500 rounded-md ">
               

                  <Link to="/weather" element={<Weather />}>
                    Open
                  </Link>
                  
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 py-6">
            <div class="bg-slate-100 rounded-lg shadow-lg overflow-hidden duration-300 ease-in-out hover:translate-y-1 hover:scale-100 ...">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-4 text-center">Movies</h3>
                <p class="text-gray-700 mb-4">
                  Our movie app is designed to provide users with an enjoyable
                  and seamless streaming experience. The app offers a vast
                  collection of films from various genres, making it easy for
                  users to find the perfect movie to watch.Users can browse
                  through the collection by searching for specific titles,
                  filtering by genre, or browsing through the app's recommended
                  movies. With our app, you'll have access to a vast collection
                  of movies that you can stream anytime, anywhere. 
                </p>
                <p className="text-sky-600 underline text-center py-3 hover:bg-sky-500 hover:text-white duration-500 rounded-md ">
                  <Link to="/movies" element={<Movies />}>
                    Open
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 py-6">
            <div class="bg-slate-100 rounded-lg shadow-lg overflow-hidden duration-300 ease-in-out hover:translate-y-1 hover:scale-100 ...">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-4 text-center">News</h3>
                <p class="text-gray-700 mb-4">
                  Our news app is designed to provide users with the latest news
                  and information from around the world. The app features a wide
                  range of news sources, including major newspapers, television
                  networks, and online publications, ensuring that users have
                  access to a diverse range of perspectives and opinions. With our app, you'll have access to a wide range of news sources, and you'll be able to customize your news feed to suit your interests and preferences.
                </p>
                <p className="text-sky-600 underline text-center py-3  hover:bg-sky-500 hover:text-white duration-500 rounded-md ">

                  <Link to="/news" element={<News />}>
                    Open
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
