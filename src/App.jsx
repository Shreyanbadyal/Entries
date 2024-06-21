import AddEntry from "./components/AddEntry.jsx";
import Display from "./components/Display.jsx";
import { useState } from "react";
export default function App(){
  const [projectState,setProjectState] = useState({projects:[]});
  
  function handleAddProject(projectData){
    setProjectState(prevState=>{
      const newProject = {
       ...projectData,
       id : Math.random().toString(),
      };
      return{
        ...prevState,
        projects:[...prevState.projects,newProject],
      };
    }
    );
  }
  function handleDeleteProject(id) {
    setProjectState(prevState => ({
      ...prevState,
      projects: prevState.projects.filter(project => project.id !== id),
    }));
  }
  
  return(
    <div className="bg-black h-screen">
  < div className="bg-black  w-[full]  text-center text-2xl">
    
    <h1 className="text-blue-500 text-4xl font-bold pt-8   ">Input</h1>
    <p className="text-blue-500 pt-4 pb-5 ">
      Start Adding your inputs.
    </p>
  </div>

<AddEntry onAdd={handleAddProject}/>
<Display projects = {projectState.projects} onDelete = {handleDeleteProject}></Display>

  </div>
  );
}