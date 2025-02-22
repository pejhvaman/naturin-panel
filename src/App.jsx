import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fefefe;
`;

const StyledApp = styled.div`
  padding: 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>hello</H1>
        <Button>Check in</Button>
        <Input type="number" placeholder="hello inout" />
      </StyledApp>
    </>
  );
}

export default App;
