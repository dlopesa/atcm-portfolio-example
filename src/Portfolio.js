import React, { useState, useEffect } from 'react';
import projectsData from './projects.json';
import ReactImageMagnify from 'react-image-magnify';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [newProject, setNewProject] = useState({
    subject: '',
    name: '',
    image: '',
    description: ''
  });

  const [portfolioItems, setPortfolioItems] = useState([]);


useEffect(() => {
  // Load the projects from the JSON file into state
  setPortfolioItems(projectsData);
}, []);

  const filterPortfolio = (subject) => {
    setSelectedFilter(subject);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  

  const handleNewProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };


  const filteredItems = selectedFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.subject === selectedFilter);

  return (
    <div className="container mx-auto py-8">
        <h2 className="text-4xl font-bold mb-4 text-center underline nderline-offset-1 decoration-4">Portfolio</h2>
      <div className="flex justify-center mb-4">
        <button onClick={() => filterPortfolio('all')} className="mr-4 border px-3 py-1 ">All</button>
        <button onClick={() => filterPortfolio('detail')} className="mr-4 border px-3 py-1 ">Details</button>
        <button onClick={() => filterPortfolio('section')} className="mr-4 border px-3 py-1 ">Sections</button>
        <button onClick={() => filterPortfolio('plan')} className="mr-4 border px-3 py-1 ">Plans</button>
        <button onClick={() => filterPortfolio('analysis')} className="border px-3 py-1 ">Analysis</button>
        <button onClick={() => filterPortfolio('booklet')} className="border px-3 py-1 ">Booklets</button>
      </div>

    

      <div className="grid grid-cols-4 gap-4">
        {filteredItems.map(item => (
          <div key={item.id} className="border p-4 cursor-pointer" onClick={() => handleProjectClick(item)}>
            <img src={item.image} alt={`Portfolio ${item.id}`} className="mb-2 h-60 w-60" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

  {/* Modal */}
  
  {showModal && selectedProject && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 text-center max-w-xl mx-4 my-auto rounded-lg" style={{ overflow: 'visible' }}> {/* Add overflow: visible */}
      <h2 className="text-xl mb-4">{selectedProject.name}</h2>
      
      <ReactImageMagnify {...{
        smallImage: {
          alt: `Portfolio ${selectedProject.id}`,
          isFluidWidth: false,
          src: selectedProject.image,
          width: 450,
          height: 450
        },
        largeImage: {
          src: selectedProject.image,
          width: 700,
          height: 700
        },
        enlargedImagePosition: "beside",
        enlargedImageContainerStyle: { zIndex: 1000 },
       
      }} />
      
      <p>{selectedProject.description}</p>
      <button onClick={closeModal} className="mt-4 bg-black text-white py-2 px-4 hover:bg-gray-900">
        Close
      </button>
      <button onClick={() => window.open(`/${selectedProject.pdf}`, '_blank')} className="mt-4 ml-4 bg-black text-white py-2 px-4 hover:bg-gray-900">
        PDF Version
      </button>
    </div>
  </div>
)}
      
      
    </div>
  );
};

export default Portfolio;