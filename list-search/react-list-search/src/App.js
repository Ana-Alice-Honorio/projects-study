import ListItem from './ListItem';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
 
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 10px;
`;
 
function App() {
  return (
    <Container>
      <ListContainer>
      <ListItem
        title="Programação Web com Node.js"
        image="https://m.media-amazon.com/images/I/4110e7iseFL.jpg"
        price="14.99"
        url="https://www.luiztools.com.br/livro-node-amazon"
      />
      <ListItem
        title="Node.js e Microservices"
        image="https://m.media-amazon.com/images/I/41CUCsnLPML.jpg"
        price="14.99"
        url="https://www.luiztools.com.br/livro-node-ii-amazon"
      />
      <ListItem
        title="MongoDB para Iniciantes"
        image="https://m.media-amazon.com/images/I/31NR3RRS3VL.jpg"
        price="11.99"
        url="https://www.luiztools.com.br/livro-mongodb-amazon"
      />
      </ListContainer>
    </Container>
  );
}
 
export default App;