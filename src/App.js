import React from "react";
import User from "./components/users/User";
import Post from "./components/posts/Post";
import "./App.css";

function App() {
  return (
    <div className="App">
      <User userId={5} />
      <Post postId={15} />
    </div>
  );
}

export default App;
