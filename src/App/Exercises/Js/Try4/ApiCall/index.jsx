import React, { useState, useEffect } from 'react';

export function ApiCallExercise() {
  const [getPost, setPosts] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [getError, setError] = useState(null);

  const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${BASE_API_URL}/posts`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const postsData = await response.json();
        setPosts(postsData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className='container--try-catch'>
      {getIsLoading ? (
        <div>Loading...</div>
      ) : getError ? (
        <div>Error: {getError}</div>
      ) : (
        <ul>
          {getPost.map((post) => (
            <li key={post?.id}>{post?.title}{post?.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
