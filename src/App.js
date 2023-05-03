import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import Login from "./pages/Login";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const logout = () => {
    signOut(auth);
    localStorage.clear();
    setIsLogged(false);
    window.location.pathname = "/login";
  };
  return (
    <Router>
      <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div class="mb-2 sm:mb-0">
          <Link
            className="text-white text-lg bg-blue-500 rounded-md py-1 px-2 no-underline text-grey-darkest hover:text-blue-dark ml-2"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-white text-lg bg-yellow-600 rounded-md py-1 px-2 text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            to="/createPost"
          >
            Create a Post
          </Link>
          {!isLogged ? (
            <Link
              className="text-white text-lg bg-green-500 rounded-md py-1 px-2 text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
              to="/login"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={logout}
              className="text-white text-lg bg-red-500 rounded-md px-2 text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createPost" element={<CreatePostPage />} />
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
      </Routes>
    </Router>
  );
}

export default App;
