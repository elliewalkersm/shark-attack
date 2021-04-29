import React from 'react';

export default function LiveStudent(students) {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{students.firstName} {students.lastName}</h5>
        </div>
        <img src="..." class="card-img-bottom" alt="..."/>
      </div>
    </div>
  )
}
