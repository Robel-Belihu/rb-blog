import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import Logo from "../assets/logo.png";
import Bloggers from "../assets/bloggers.png";

function HomePage({ isLogged }) {
  const [postsList, setPostsList] = useState([]);

  const postsRef = collection(db, "posts");
  const deletePosts = async (id) => {
    const singlePost = doc(db, "posts", id);
    await deleteDoc(singlePost);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsRef);
      setPostsList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          name: doc.displayName,
        }))
      );
    };
    getPosts();
  }, [deletePosts]);

  return (
    <div>
      {postsList.map((post) => {
        return (
          <div class="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
            <div>
              <div class="w-4/5 max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div class="md:flex items-center -mx-10">
                  <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                    <div class="relative">
                      <img src={Bloggers} class="w-full relative z-10" alt="" />
                      <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 px-10">
                    <div class="mb-10">
                      <h1 class="text-2xl font-semibold text-purple-800 uppercase text-2xl mb-5">
                        {post.title}
                      </h1>
                      <p class="text-xl font-fonty mb-5">{post.post}</p>
                      <label className="font-semibold font-fonty text-orange-600">
                        <span className="text-red-600">@</span>
                        {post.author.name}
                      </label>
                      {isLogged && post.author.id === auth.currentUser.uid && (
                        <button
                          onClick={() => deletePosts(post.id)}
                          className="border-1 bg-yellow-200 shadow-lg text-xl font-black text-red-800 ml-5"
                        >
                          X <span>Delete Post</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Robel's Website"
            href="https://my-portfolio-five-liart.vercel.app/"
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
