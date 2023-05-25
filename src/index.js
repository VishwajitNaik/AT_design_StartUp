
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  {/* <ChakraProvider> */}
  <BrowserRouter>
    <App />
    </BrowserRouter>
  {/* </ChakraProvider> */}
  </React.StrictMode>
);
