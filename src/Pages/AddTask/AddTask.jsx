import { Button, Container, Form } from "react-bootstrap";



const AddTask = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const title=form.title.value;
        const status = form.status.value;
        const description = form.description.value;
        console.log(title,status,description);
    }
    return (
        <div className="bg-secondary">
        <Container className="p-5 ">
              <Form onSubmit={handleSubmit}  className="w-50 mx-auto">
                <h3 className="mb-5 text-center">Add New Task</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                  />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    name="status"
                    placeholder="Status"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="description" rows={3} />
      </Form.Group>
                <Button className="mb-2" variant="primary" type="submit">
                 Add Task
                </Button>
           
        
              </Form>
            </Container>
        </div>
    );
};

export default AddTask;