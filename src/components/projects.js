import React, { useState } from 'react'
import { Projectcard } from './projectcard'
import image from "../Image/astro1.png"
import { Message } from './message'
import { projects } from '../data/constants'


export const Project = () => {
    
    // const [toggle,setToggle] = useState("all");

    const [filtered,setFilter]=useState(projects);
    const [project,setProject]=useState(projects);
    const [ active, setActive]=useState(false);



    const [nav ,setNav]=useState(false);

    function allProject(){
      setFilter(project);
    }

    function filterProject(cat) {
      const filter = projects.filter(project => project.category == cat);
      setFilter(filter);
      console.log(filter);
  }



  return (
    <div id="projects">
    <div className=" relative flex  flex-col justify-center items-center ">

      {/* Project header */}
      <div className="text-white text-center mt-10  w-[20rem] md:w-[35rem]">
        <h1 className="font-bold text-3xl mb-16 border-b-2 border-b-yellow-500 py-2">Projects</h1>
        <p className="">
        I have worked on a wide range of projects. 
        From web apps to android apps. Here are some of my projects.
        </p>
      </div>
      {/* Option */}
      <div className='flex gap-4 text-[#854CE6] p-1  mt-24 border border-[#854CE6] rounded-xl items-center justify-center bg-slate-900 md:text-xl'>
        
        <button onClick={()=>allProject()} className=' p-1 border-[#854CE6] hover:text-yellow-500' >ALL</button>
        <button onClick={()=>filterProject("web")}  className='border-l p-1 border-[#854CE6] hover:text-yellow-500'>WEB APP'S</button>
     <button onClick={()=>filterProject("AI app")}  className='border-l p-1 border-[#854CE6] hover:text-yellow-500'>AI & AUTAMATED APP'S</button>
        <button onClick={()=>filterProject("blockchain app")} className='border-l p-1 border-[#854CE6] hover:text-yellow-500'>BLOCKCHAIN APP'S</button>
      </div>
      <div className=" absolute top-[13.5rem] left-1 sm:left:24 md:top-52 md:left-96  transfom transition duration-500 hover:scale-125  hover:-translate-y-10">
      <button onClick={()=> setNav(!nav)}>
            {
                nav ? <Message/> :null
            }
            <img src={image} alt="" className="w-24"/>
            </button>
        </div>
       

      {/* projects */}
      <div className='relative'>
      
      
        {/* <Projectcard/> */}
        
        <div className='flex flex-wrap gap-10 items-center justify-center   mt-10  lg:w-[60rem] md:w-[45rem] xl:w-[75rem] '>
          {
            
            filtered.map((project)=><Projectcard project={project} />)
          }
          </div>
        
        {/* {
            projects.filter((item)=> item.category === toggle)
            .map((project) => {
                <Projectcard project={project}/>
            })
        } */}
        
      </div>
      
    </div>
  </div>
  )
}

