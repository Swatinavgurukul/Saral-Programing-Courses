import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import CourseContent from "./components/CourseContent"
import history from "./components/history"

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      CoursesList: [],
      ExercisesList: [],
      inputValue: "",
    }
  }

  componentDidMount() {
    fetch("https://saral.navgurukul.org/courses")
      .then((response) => { return response.json() })
      .then((data) => {
        // console.log(data, "data..");
        this.setState({
            CoursesList: data["availableCourses"]
        })
      })
  }

  handlerForExercises = (id) => {
    const exercise_id = id;
    fetch(`https://saral.navgurukul.org/api/courses/${exercise_id}/exercises`)
      .then((response) => { return response.json(); })
      .then((data) => {
        console.log(data);
        this.setState({
          ExercisesList: data["data"]
        })
        history.push("/Exercises", {
          data: this.state.ExercisesList,
          id: exercise_id,
        })
      })
  }

  handlerForSearch = (value) => {
    this.setState({
      inputValue: value
    })
  }
  render() {

    const dataOfCourses = this.state.CoursesList
    return (
      <div className="App">
        <Header onChange={this.handlerForSearch} value={this.state.inputValue} />
        <CourseContent value={this.state.inputValue} dataOfCourses={dataOfCourses} onSelect={this.handlerForExercises} />
      </div>
    )
  }
}

export default App;