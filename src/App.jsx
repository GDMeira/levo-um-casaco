import { UserProvider } from './contexts/UserContext';
import { HomePage } from './pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import './assets/styles/style.css';

const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif', 
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <HomePage />
      </UserProvider>
    </ChakraProvider>
  )
}

export default App
