import {
    createBrowserRouter,
   
  } from "react-router-dom";

  
import Main from "../layout/Main";
import TaskList from "../Pages/TaskList/TaskList";
import AddTask from "../Pages/AddTask/AddTask";
import TaskManagement from "../Pages/TaskManagement/TaskManagement";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     
      children:[
        {
            path:'/',
            element:<TaskList></TaskList>
        },
        {
            path:'/addTask',
            element:<AddTask></AddTask>,

        },
        {
            path:'/manageTask',
            element:<TaskManagement></TaskManagement>
        }
       
       
      ]
    },
  ]);

export default router;