import NewProject from "./components/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import NoProject from "./components/NoProject.jsx";
import { useState } from "react";
import ProjectDisplay from "./components/ProjectDisplay.jsx";

function App() {
  const [addProject, setAddProject] = useState(false); // Check if user selected to add a project
  const [saveProject, setSaveProject] = useState([]); // Check if the save button was clicked when creating a project and store in an array as object
  const [clickedProject, setClickedProject] = useState(null); // Check if a project is clicked

  // Function to handle the deletion of the project
  function handleDeleteProject(title, description, dueDate) {
    setSaveProject(prevProjects => prevProjects.filter(project =>
      project.title !== title && project.description !== description && project.dueDate !== dueDate))
    setClickedProject(null);

  }

  // Function to handle which project to render
  function handleClickedProject(project) {
    setClickedProject(project);
    setAddProject(false);
  }

  // Function to insert a new project into the saveProject useState array
  function handleSaveProject(title, description, dueDate) {

    const newProject = { title, description, dueDate };

    setSaveProject((prevProjects) => [...prevProjects, newProject]);
    setAddProject(false);

  }

  //Display the NewProject component
  function handleAddProject() {
    setAddProject(true);
  }

  // Return back to NoProject component
  function cancelProject() {
    setAddProject(false);
  }

  return (
    <main className="h-screen flex gap-8 bg-yellow-50">
      <Sidebar displayClickedProject={handleClickedProject} projects={saveProject} createProjectClick={handleAddProject} />

      {addProject ? <NewProject handleSave={handleSaveProject} onCancel={cancelProject} />

        : clickedProject ? <ProjectDisplay
          handleDelete={handleDeleteProject}
          title={clickedProject.title}
          description={clickedProject.description}
          dueDate={clickedProject.dueDate} />

          : <NoProject createProjectClick={handleAddProject} />}
    </main >
  );
}

export default App;



