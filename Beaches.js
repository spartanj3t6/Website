import React from 'react';

const Beaches = ({ activities }) => {
  return (
    <div className="beaches">
      <h2>Beaches</h2>
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

export default Beaches;