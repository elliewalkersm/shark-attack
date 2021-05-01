const students = [
  {
    id: 1,
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: 2,
    firstName: 'Lindsey',
    lastName: 'Satterfield',
    isDead: false
  },
  {
    id: 3,
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false
  },
  {
    id: 4,
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false
  },
  {
    id: 5,
    firstName: 'Ben',
    lastName: 'Jarrett',
    isDead: false
  },
  {
    id: 6,
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false
  },
  {
    id: 7,
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: 8,
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false
  },
  {
    id: 9,
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: false
  },
  {
    id: 10,
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false
  },
  {
    id: 11,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: false
  },
  {
    id: 12,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false
  },
  {
    id: 13,
    firstName: 'John',
    lastName: 'Maple',
    isDead: false
  },
  {
    id: 14,
    firstName: 'Holly',
    lastName: 'Parson',
    isDead: false
  },
  {
    id: 15,
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false
  },
  {
    id: 16,
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false
  },
  {
    id: 17,
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false
  },
  {
    id: 18,
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false
  },
  {
    id: 19,
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: false
  },
  {
    id: 20,
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false
  },
  {
    id: 21,
    firstName: 'Rob',
    lastName: 'Cole',
    isDead: false
  },
  {
    id: 22,
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false
  },
  {
    id: 23,
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: false
  },
  {
    id: 24,
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    isDead: false
  }
];

const livingStudents = () => students.filter((student) => !student.isDead);

const dearlyBeloved = () => students.filter((student) => student.isDead);

const followTheLight = () => {
  const currentLiveStudents = livingStudents();
  const randomStudent = currentLiveStudents[Math.floor(Math.random() * currentLiveStudents.length)];

  const index = students.indexOf(randomStudent);
  students[index].isDead = true;

  return [livingStudents(), followTheLight()];
};

export {
  livingStudents,
  dearlyBeloved,
  followTheLight,
  students
};
