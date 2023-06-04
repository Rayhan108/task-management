import {
    createBrowserRouter,
   
  } from "react-router-dom";

  
import Main from "../layout/Main";
import TaskList from "../Pages/TaskList/TaskList";
import AddTask from "../Pages/AddTask/AddTask";
import TaskManagement from "../Pages/TaskManagement/TaskManagement";
import UpdateTask from "../Pages/TaskManagement/UpdateTask";


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
        },
        {
            path:'/update/:id',
            element:<UpdateTask></UpdateTask>,
            loader:({params})=>fetch(`https://task-management-server-iota.vercel.app/updateTask/${params.id}`)
        }
       
       
      ]
    },
  ]);

export default router;