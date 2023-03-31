import React from 'react';

const Sightseeing = ({ activities }) => {
  return (
    <div className="sightseeing">
      <h2>Sightseeing</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sightseeing;