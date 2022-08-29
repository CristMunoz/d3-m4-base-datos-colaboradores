import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { useState } from 'react';



function App() {
  const [search, setSearch] = useState("");
  
  return (
    <div className="App">
      <Header setSearch={setSearch} />
      <MainContainer search={search} />
    </div>
  );
}

export default App;
