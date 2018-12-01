import React, {Component, Fragment} from 'react'
import Exercises from './Exercises/index'
import { Header, Footer} from './Layouts/index'
import {muscles} from '../store'


export default class extends Component {

	state ={
		exercises:[],
		exercise:{}
		
	};

	componentDidMount(){

		fetch('/api/exercises',(req,res))
			.then(res => res.json())
			.then(exercises =>this.setState({exercises})
	}

	getExercisesByMuscles(){


		return Object.entries(
			this.state.exercises.reduce((exercises,exercise) =>{
			const {muscles} = exercise;
			exercises[muscles] = exercises[muscles]
			?
			[...exercises[muscles], exercise]
			:
			[exercise]

			return exercises
		}, {})
		)

	}

	handleCategory = category =>{
				this.setState({
					category
				});
			}

	handleExerciseSelected = id =>{

		this.setState(({ exercises })=>({
			exercise: exercises.find(ex => ex.id === id)
		}))

	}
			
	render(){

	const exercises= this.getExercisesByMuscles(),
	{ category, exercise } = this.state;
	
		return(
			<Fragment>
					<Header />
					
					<Exercises 
					exercises={exercises}
					category={category}
					onSelect = {this.handleExerciseSelected}
					exercise= {exercise}
					/>

					<Footer
					category={category}
					muscles ={muscles}
					onSelect = {this.handleCategory}
					
					/>
			</Fragment>
			);
			
	}
1
}