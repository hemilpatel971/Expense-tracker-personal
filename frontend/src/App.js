import React, {useState} from "react"
import styled from "styled-components";
import bg from './img/bg.jpg'
import { MainLayout } from './styles/Layouts'
import Navigation from "./components/Navigation/Navigation";
import Expenses from "./components/Expenses/Expenses";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Incomes/Incomes";
import { useGlobalContext } from "./context/globalContext";
import Transactions from "./components/Transactions/Transaction";

function App() {
  const [active, setActive] = React.useState(1)

  const global = useGlobalContext()
  console.log(global)

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Transactions/>
      case 3:
        return <Income/>
      case 4:
        return <Expenses/>
      default: 
        return <Dashboard/>
    }
  }

  return (
    <AppStyled bg = {bg} className="App">
      <MainLayout>
        <Navigation active ={active} setActive = {setActive}/>
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 20px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;
export default App;
