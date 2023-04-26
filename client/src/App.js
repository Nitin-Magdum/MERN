
import Navbar from './Componants/Navbar';
import UserInput from './Componants/UserInput';
import styled from 'styled-components';


const Container = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  color: blue;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <UserInput />
    </Container>
  );
}

export default App;
