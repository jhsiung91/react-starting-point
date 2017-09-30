import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
// const CREATE_CAMPUS = 'CREATE_CAMPUS';
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
// const CREATE_STUDENT = 'CREATE_STUDENT';

export function getCampuses(campuses){
    return {
        type: GET_CAMPUSES,
        campuses: campuses
    }
}
export function getCampus(campus){
    return {
        type: GET_CAMPUS,
        campus: campus
    }
}
export function getStudents(students){
    return {
        type: GET_STUDENTS,
        student
    }
}
export function getStudent(student){
    return {
        type: GET_STUDENT,
        student
    }
}

export function fetchCampuses(){
	return function(dispatch){
		return axios.get('/api/campuses')
			.then(res => {
				return res.data
			})
			.then(campuses => {
				const action = getCampuses(campuses);
				dispatch(action);
		})
	}
}
export function fetchCampus(campusId){
	return function(dispatch){
		return axios.get(`/api/campuses/${campusId}`)
			.then(res => {
				return res.data
			})
			.then(campus => {
				const action = getCampus(campus)
				dispatch(action);
		})
	}
}
export function fetchStudents(){
	return function(dispatch) {
	return axios.get('/api/students')
		.then(res => {
			return res.data
		})
		.then(students => {
			const action = getStudents(students);
			dispatch(action);
		})
	}
}
export function fetchStudent(studentId){
	return function(dispatch){
	return axios.get(`/api/students/${studentId}`)
		.then(res => {
			return res.data
		})
		.then(student => {
			const action = getStudent(student);
			dispatch(action);
		});
	}
}

function reducer (state = initialState, action) {
	switch (action.type) {
		case GET_CAMPUSES:
			return Object.assign({}, state, {campuses: action.campuses});

		case GET_CAMPUS:
			return Object.assign({}, state, {campus: action.campus});

		case GET_STUDENTS:
			return Object.assign({}, state, {students: action.students});

		case GET_STUDENT:
			return Object.assign({}, state, {student: action.student});
		
		default:
			return state;
    }
}



const store = createStore(
	reducer, applyMiddleware(loggerMiddleware, thunkMiddleware)
)