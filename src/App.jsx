import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Wildin</Heading>
            <div>
              <Heading as="h2">Action</Heading>
              <Button>PrimaryM</Button>
              <Button size="small" variation="secondary">
                SecondaryS
              </Button>
            </div>
          </Row>

          <div>
            <Heading as="h3">Form</Heading>
            <Row>
              <Input type="number" placeholder="hello" />
              <Input type="text" placeholder="hello" />
            </Row>
          </div>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
