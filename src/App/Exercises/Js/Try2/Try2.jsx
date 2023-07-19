import React, { useState, useEffect } from 'react';

export function ExerciseTry2() {
  const ping = 2 * 1000;
  const api = (userName) =>
    new Promise((resolve, reject) => {
      const mockedResponseFromServer = userName.length;
      setTimeout(() => {
        resolve(mockedResponseFromServer);
      }, ping);
    });

  const TryCatchAndFinally = () => {
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      let isMounted = true;

      const fetchUserId = async (userName) => {
        try {
          setLoading(true);
          const response = await api(userName);
          if (isMounted) {
            setUserId(response);
            setLoading(false);
          }
        } catch (err) {
          console.error(err);
          setLoading(false);
        }
      };

      if (userName) {
        fetchUserId(userName);
      }

      return () => {
        isMounted = false;
      };
    }, [userName]);

    return (
      <div>
        <div style={{ marginBottom: '10px' }}>Wpisz imię i pobierz ID</div>
        <input value={userName} type="text" onChange={(event) => setUserName(event.target.value)}></input>
        {!loading && userId !== '' && <p>Twoje ID to: {userId}</p>}
        {loading && <p>pobieram ID ...</p>}
      </div>
    );
  };

  return <TryCatchAndFinally />;
}
