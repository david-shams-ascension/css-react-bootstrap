import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function AlertClosable() {
     const [show, setShow] = useState(true);
    return (
        <>
            <Alert show={show} dismissible variant="success">
                <Alert.Heading>Heading</Alert.Heading>
                <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} >Hide/Show</Button>
                </div>
            </Alert>
        </>
    )
}
