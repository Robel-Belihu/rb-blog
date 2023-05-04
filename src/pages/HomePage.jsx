import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Logo from "../assets/logo.png";
import Bloggers from "../assets/bloggers.png";

function HomePage() {
  const [postsList, setPostsList] = useState([]);

  const postsRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsRef);
      setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  return (
    <div>
      {postsList.map((post) => {
        return <div>{post.post}</div>;
      })}

      <div class="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div class="w-3/5 max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div class="relative">
                <img src={Bloggers} class="w-full relative z-10" alt="" />
                <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
              <div class="mb-10">
                <h1 class="font-bold uppercase text-2xl mb-5">
                  Mens's Ragged <br />
                  Waterproof Jacket
                </h1>
                <p class="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                  Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                  voluptates, sint enim fugiat saepe, dolor fugit, magnam
                  explicabo eaque quas id quo porro dolorum facilis...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Robel's Website"
            href="https://robel-belihu.github.io"
            target="_blank"
            class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              class="object-cover object-center w-full h-full rounded-full"
              src={Logo}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
