import React from 'react';
import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: 'Pranav',
    bio: 'Pranav is an AI developer with a background in healthcare technology.',
  },
  {
    name: 'Zain',
    bio: 'Zain is a software engineer specializing in user experience design. He ensures our app is intuitive and easy to use for healthcare professionals.',
  },
  {
    name: 'Abhinav',
    bio: 'Abhinav is a data scientist with expertise in medical data analysis.',
  },
];

function About() {
  return (
    <main className="about">
      <h2>About the Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} bio={member.bio} />
        ))}
      </div>
    </main>
  );
}

export default About;
