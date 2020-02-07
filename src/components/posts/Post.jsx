import React, { useState, useEffect } from "react";

import Card from "../card/Card";

const Post = ({ postId }) => {
  console.log(postId);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts?${postId}`
      );
      const posts = await resp.json();
      setPost(posts[0]);
    };
    fetchPost();
  }, [postId]);
  return (
    <Card>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>No Post Found</p>
      )}
    </Card>
  );
};

export default Post;
