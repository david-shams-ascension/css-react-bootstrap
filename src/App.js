import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import AlertClosable from './components/alert-closable/Alert-closable';


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
      <AlertClosable />
    </div>
  );
}

export default App;
