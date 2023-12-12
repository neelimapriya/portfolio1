import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Resume from "../Components/Home/Resume/Resume";
import Skill from "../Components/Home/Skill/Skill";
import Project from "../Components/Home/Project/Project";
import Contact from "../Components/Home/Contact/Contact";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
      
        {
            path:'/resume',
            element:<Resume></Resume>
        },
        {
            path:'/skill',
            element:<Skill></Skill>
        },
        {
            path:'/project',
            element:<Project></Project>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },

      ]
    },
  ]);

export default router;