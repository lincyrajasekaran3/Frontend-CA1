import React from "react";  
import TeamMemberCard from "./components/TeamMemberCard"

function App() {
  const member = [
    {
      name: "John doe",
      jobtitle: "Software engineer"
    },

    {
      name:"Lincy",
      jobtitle: "Entrepreneur"
    }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6"></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {member.map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            jobtitle={member.jobtitle}
           
          />
        ))}
      </div>
    </div>
  );
}

export default App;