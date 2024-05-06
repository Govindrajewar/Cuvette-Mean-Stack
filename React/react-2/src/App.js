import './App.css';
import Component1 from './components/Component1';

import HOC from './components/HOC';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <div className="App">
      {/* <Component1/> */}

      <HOC component={ Section1 }/>
      <HOC component={ Section2 } />

      <Wrapper>
        <Section1/>
        <Section2/>
      </Wrapper>


    </div>
  );
}

export default App;
