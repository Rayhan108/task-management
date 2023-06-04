import { Button, Container, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";


const UpdateTask = () => {
    const task =useLoaderData()
    console.log(task);
    const handleUpdate=()=>{

    }
    return (
        <div>
                <Container className="p-5 ">
              <Form onSubmit={handleUpdate}  className="w-50 mx-auto">
                <h3 className="mb-5 text-center">Add New Task</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    defaultValue={task.title}
                    readOnly
                    placeholder="Title"
                   
                  />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    name="status"
                    defaultValue={task.status}
                
                    
                    placeholder="Status"
                   
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="description"  defaultValue={task.description} readOnly
                   rows={3} />
      </Form.Group>
      <Button variant="primary" size="lg">
        Update Task
      </Button>
        
              </Form>
            </Container>
        </div>
    );
};

export default UpdateTask;