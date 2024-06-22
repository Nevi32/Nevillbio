import React from 'react';

const Skills = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow">PHP</div>
            <div className="bg-white p-4 rounded shadow">HTML</div>
            <div className="bg-white p-4 rounded shadow">CSS</div>
            <div className="bg-white p-4 rounded shadow">JavaScript</div>
            <div className="bg-white p-4 rounded shadow">MySQL</div>
            <div className="bg-white p-4 rounded shadow">Redis</div>
            <div className="bg-white p-4 rounded shadow">MongoDB</div>
            <div className="bg-white p-4 rounded shadow">Git</div>
            <div className="bg-white p-4 rounded shadow">Bash</div>
            <div className="bg-white p-4 rounded shadow">Linux</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
