import './App.css';
import { LeftMenu } from './components/LeftMenu';
import { Maincontainer } from './components/MainContainer';
import { RightMenu } from './components/RightMenu';
function App() {
  return (
    <div className='App'>
      <LeftMenu/>
      <Maincontainer/>
      <RightMenu/>
      <div className='background'>
        
      </div>
    </div>
  );
}

export default App;
