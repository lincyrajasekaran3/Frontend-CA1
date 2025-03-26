import React from "react";

const TeamMemberCard = ({ name, jobtitle}) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white max-w-sm">
      <h2 className="text-xl font-semibold mt-2">Name: {name}</h2>
      <p className="text-gray-700">Job: {jobtitle}</p>
      
    </div>
  );
};

export default TeamMemberCard;