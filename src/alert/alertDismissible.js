import { Alert } from "react-bootstrap";

function AlertDismissible(props) {
    return (
      <Alert variant="danger" onClose={() => props.setShow(false)} dismissible>
        <Alert.Heading>{props.title}</Alert.Heading>
        <p>
          {props.message}
        </p>
      </Alert>
    );
}
export default AlertDismissible;