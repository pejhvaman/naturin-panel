import styled from "styled-components";

const H1 = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fefefe;
`;

const StyledApp = styled.div`
  background-color: purple;
  padding: 2rem;
`;

function App() {
  return (
    <StyledApp>
      <H1>hello</H1>
    </StyledApp>
  );
}

export default App;
