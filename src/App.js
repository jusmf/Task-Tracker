import { TaskContainer } from './Components/TaskContainer';

import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #ee5166;
  background-image: linear-gradient(315deg, #ee5166 0%, #f08efc 75%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-size: 25px;
  padding: 25px;
  background-color: white;
  width: 50%;
  border-bottom: 1px solid rgb(16 30 54 / 13%);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0 5px 40px rgb(16 30 54 / 30%);
`;

function App() {
  return (
    <AppContainer className="App">
      <StyledHeader>Task Tracker</StyledHeader>
      <TaskContainer />
    </AppContainer>
  );
}

export default App;
