import React, { useEffect, useState } from 'react';

export default function RepositoryDetails() {
  // Assuming you have user and repold as props
  const user = { login: 'your-username' };
  const repold = 'your-repository';

  const [repositoryData, setRepositoryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${user.login}/${repold}`);
        const data = await response.json();
        setRepositoryData(data);
      } catch (error) {
        console.error('Error fetching repository data:', error);
      }
    };

    fetchData();
  }, [user.login, repold]);

  return (
    <div>
      <h2>Repository Details</h2>
      {repositoryData ? (
        <div>
          <h3>{repositoryData.name}</h3>
          <p>Description: {repositoryData.description}</p>
          {/* Display other relevant information */}
        </div>
      ) : (
        <p>Loading repository details...</p>
      )}
    </div>
  );
}
