import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertClosable() {
     const [show, setShow] = useState(true);
    return (
        <div>
            <Alert dismissible variant="success">
                <Alert.Heading>Heading</Alert.Heading>
            </Alert>]
        </div>
    )
}
