import React from 'react'

const students = [
  {
    id: firebaseKey,
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Lindsey',
    lastName: 'Satterfield',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Ben',
    lastName: 'Jarrett',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'John',
    lastName: 'Maple',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Holly',
    lastName: 'Parson',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Rob',
    lastName: 'Cole',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: 'false'
  },
  {
    id: firebaseKey,
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    isDead: 'false'
  }
];

function livingStudents() {
 if (students.isDead === 'false')
 return (
    <div>
      console.warn('Alive')
    </div>
  )
}

function dearlyBeloved() {
  if (students.isDead === 'true')
  return (
    <div>
      console.warn('Dead')
    </div>
  )
}

function followTheLight() {
  return (
    <div>
      console.warn('followTheLight')
    </div>
  )
}

export { livingStudents, dearlyBeloved, followTheLight };
