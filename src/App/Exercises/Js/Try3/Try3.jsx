import React, { useState, useEffect } from 'react';
import './styles.css'

export function ExerciseTry3() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsVisible, setPostsVisible] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      setData(data);
      setLoading(false);
    } catch (error) {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
      setLoading(false);
    }
  };

  const handleFetchData = () => {
    setLoading(true);

    setTimeout(() => {
      fetchData();
    }, 3000);
  };

  const handleTogglePosts = () => {
    setPostsVisible(!postsVisible);
  };

  useEffect(() => {
    if (postsVisible) {
      handleFetchData();
    }
  }, [postsVisible]);

  console.log('Data:', data);
  console.log('Loading:', loading);

  return (
    <div>
      <button onClick={handleTogglePosts} disabled={loading}>
        {postsVisible ? 'Ukryj posty' : 'Pobierz posty'}
      </button>
      <div>
        {loading ? (
          <div className="loader"></div> // Show the loading spinner here
        ) : postsVisible ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}



