import { useEffect, useState } from "react";
import ManageTask from "./ManageTask";
import { Table } from "react-bootstrap";


const TaskManagement = () => {
    const [task,setTask]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/task")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setTask(data);
        });
    },[])
    return (
     <div className="text-center mt-3 mb-3 p-3">
           <Table responsive>
        <thead>
          <tr>
              <th>Index</th>
            <th> Title  </th>
            <th> Status  </th>
            <th> Description  </th>
            <th> Update  </th>
            <th> Delete  </th>
          </tr>
        </thead>
        <tbody>
        {
          task.map((t, i) => (
              <ManageTask key={t._id} t={t} i={i}></ManageTask>
            ))
        }
        </tbody>
      </Table>
     </div>
    );
};

export default TaskManagement;