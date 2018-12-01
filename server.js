const express = require('express');

const app = express();


const port = 5000;

app.get('/api/exercises', (req,res)=>{
const exercises = [
  {
    id: 'overhead-press',
    title: 'Overhead Press',
    description: 'Delts exercise...',
    muscles: 'shoulders'
  },
  {
    id: 'dips',
    title: 'Dips',
    description: 'Triceps exercise...',
    muscles: 'arms'
  },
  {
    id: 'barbell-curls',
    title: 'Barbell Curls',
    description: 'Biceps exercise...',
    muscles: 'arms'
  }

  ];

  res.json(exercises);
});

app.listen(port, ()=>{
	console.log('Running Backend ');
})