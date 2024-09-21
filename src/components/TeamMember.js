import React from 'react';

function TeamMember({ name, bio }) {
  return (
    <div className="team-member">
      <img src={`https://via.placeholder.com/150?text=${name}`} alt={`${name}`} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
}

export default TeamMember;
