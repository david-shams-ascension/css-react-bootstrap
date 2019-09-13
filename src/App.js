import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


function App() {
  return (
    <div>
    React Bootstrap 

    <Alert dismissible variant="danger">
    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    <p>
      Error message.
    </p>
    <Button>RButton</Button>

  </Alert>

    </div>
  );
}

export default App;
