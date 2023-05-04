import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const navigate = useNavigate();

  const postsRef = collection(db, "posts");

  const postHandler = async (e) => {
    e.preventDefault();
    await addDoc(postsRef, {
      title,
      post,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  return (
    <div className="container my-24 px-6 mx-auto ">
      <section className="mb-32 text-center text-gray-800">
        <div className="max-w-[700px] mx-auto px-3 lg:px-6">
          <h2 className="text-3xl font-bold mb-12">Create a Post</h2>
          <form className="bg-purple-300 p-6 rounded-md shadow-xl">
            <div className="form-group mb-6">
              <label className="text-xl">Title:</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Title"
              />
            </div>

            <div className="form-group mb-6">
              <label className=" text-xl ">write your post here:</label>
              <textarea
                onChange={(e) => setPost(e.target.value)}
                className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="post ..."
              ></textarea>
            </div>
            <button
              onClick={postHandler}
              type="submit"
              className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
            >
              SUBMIT POST
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CreatePostPage;
