import { ListGroup } from "flowbite-react";

function Docliste() {
    return (
        <div className="flex justify-center">
            <ListGroup className="w-48">
                <ListGroup.Item>Profile</ListGroup.Item>
                <ListGroup.Item>Settings</ListGroup.Item>
                <ListGroup.Item>Messages</ListGroup.Item>
                <ListGroup.Item disabled>Download</ListGroup.Item>
            </ListGroup>
        </div>
    );
}
export default Docliste;