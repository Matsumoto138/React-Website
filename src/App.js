import './App.css';
import Banner from './components/Banner';
import Carrier from './components/Carrier';
import Games from './components/Games';
import Header from './components/Header';
import News from './components/News';
import Newslatter from './components/Newslatter';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="header">      
        <Banner></Banner>
        <Newslatter></Newslatter>
      </div>
      <News></News>
      <Carrier></Carrier>
      <Team></Team>
      <Games></Games>
    </div>
  );
}

export default App;
