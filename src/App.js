import './App.css';
import { useState } from 'react';
import WatchesForm from './components/WatchesForm';
import WatchesList from './components/WatchesList';
import nextId from 'shortid';

const startData = [

];

function App() {
  const [clocks, setClocks] = useState(startData);

  function addClock(data) {
    if (data.name === '' || data.timeZone === '') return null;

    const newClock = {
      id: nextId(),
      name: data.name,
      timeZone: data.timeZone,
    };

    setClocks((prevState) => [...prevState, newClock]);
  }

  function deleteClock(id) {
    setClocks((prevState) => prevState.filter((clock) => clock.id !== id));
  }

  return (
    <div className='App'>
      <WatchesForm onSubmit={addClock} />
      <WatchesList clocks={clocks} onDelete={deleteClock} />
    </div>
  );
}

export default App;