import './App.css';
import FilterBar from './FilterBar/FilterBar';
import Header from './Header/Header';
import PinViewer from './PinViewer/PinViewer';

function App() {
  return (
    <div className="App">
      <Header/>
      <FilterBar/>
      <PinViewer/>
    </div>
  );
}

export default App;
