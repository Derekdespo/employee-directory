import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search"

function App() {
  return (
    <div className="App">
      <Wrapper>
      <Header>
        <Search />
      </Header>
      <Main />
      </Wrapper>
    </div>
  );
}

export default App;
