import { ListGroup } from "flowbite-react";

function Linkliste() {
    return (
        <div className="flex justify-center">
        <ListGroup className="w-48">
          <ListGroup.Item href="#" active>
            Profile
          </ListGroup.Item>
          <ListGroup.Item href="#">Settings</ListGroup.Item>
          <ListGroup.Item href="#">Messages</ListGroup.Item>
          <ListGroup.Item href="#">Download</ListGroup.Item>
        </ListGroup>
      </div>
    );
}
export default Linkliste;