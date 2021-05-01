import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

const SharkTank = ({ aliveStudents }) => (
<ul>
  {aliveStudents.map((student) => (
    <LiveStudent key={student.id} student={student} />
  ))}
</ul>);

SharkTank.propTypes = {
  aliveStudents: PropTypes.array.isRequired
};

export default SharkTank;
