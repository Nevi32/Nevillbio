import React from 'react';

const Projects = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          {/* Add your projects here as needed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-lg mb-4">Description of the project.</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-lg mb-4">Description of the project.</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
