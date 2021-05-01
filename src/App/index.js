import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import './App.scss';
import { livingStudents, followTheLight, dearlyBeloved } from '../Helpers/data/StudentsData';

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
      <h1>Welcome to NSS Aquarium!</h1>
      <Button
        color='danger'
        onClick={killEmDead}
        disabled={aliveStudents.length <= 0}
      >
        Kill Student
      </Button>
      <h2>Shark Tank</h2>
      <ul>
        {aliveStudents.map((liveStudent) => <li key={liveStudent.id}>
          {`${liveStudent.firstName} ${liveStudent.lastName}`}</li>)}
      </ul>
      <h2>Graveyard</h2>
      <ul>
        {deadStudents.map((liveStudent) => <li key={liveStudent.id}>
            {`${liveStudent.firstName} ${liveStudent.lastName}`}
          </li>)}
      </ul>
    </div>
  );
}

export default App;
