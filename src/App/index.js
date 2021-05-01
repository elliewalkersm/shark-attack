import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import './App.scss';
import { livingStudents, followTheLight, dearlyBeloved } from '../Helpers/data/StudentsData';
import SharkTank from '../Components/SharkTank';
import GraveYard from '../Components/Graveyard';

function App() {
  const [aliveStudents, setAliveStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setAliveStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  }, []);

  const killEmDead = () => {
    const [living, dead] = followTheLight();
    setAliveStudents(living);
    setDeadStudents(dead);
  };

  return (
    <div className='App'>
      <Button
        color='danger'
        onClick={killEmDead}
        disabled={aliveStudents.length <= 0}
      >
        Kill em Dead
      </Button>
      <h2>Shark Tank</h2>
      <SharkTank color='info' aliveStudents={aliveStudents} />
      <h2>GraveYard</h2>
      <GraveYard color='secodary' deadStudents={deadStudents}/>
    </div>
  );
}

export default App;
