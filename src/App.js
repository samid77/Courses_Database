import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Header from './components/Header';
import Content from './components/Content';
import AddCourse from './components/AddCourse';
import './App.css';
import {Link, Route} from 'react-router-dom';

class App extends Component {
  state = {
    courses: []
  }
  getCourses(){
    $.ajax({
      url: 
    });
  }
  getContent(){
    this.setState({
      courses: [
        {
          id: uuid.v4(),
          title: 'ReactJS Crash Cource',
          category: 'Front End',
          image: 'img/react.png'

        },
        {
          id: uuid.v4(),
          title: 'Building Web App with Node.js',
          category: 'Back End',
          image: 'img/node.png'
        },
        {
          id: uuid.v4(),
          title: 'Introduction to Android Studio',
          category: 'Mobile Development',
          image: 'img/android.png'
        },
        {
          id: uuid.v4(),
          title: 'Phyton for Data Science',
          category: 'Data Science',
          image: 'img/python.jpg'
        },
        {
          id: uuid.v4(),
          title: 'Introduction to Docker',
          category: 'Dev-Ops',
          image: 'img/docker.png'
        },
        {
          id: uuid.v4(),
          title: 'MongoDB Complete Guides',
          category: 'Database',
          image: 'img/mongo.png'
        },
      ]
    });
  }
  componentWillMount(){
    this.getCourses();
  }
  componentDidMount(){
    this.getCourses();
  }
  handleSubmitData(course){
    let courses = this.state.courses;
    courses.push(course);
    this.setState({
      courses: courses
    });
  }
  handleDeleteCourse(id){
    let courses = this.state.courses;
    let index = courses.findIndex(x => x.id === id);
    courses.splice(index, 1);
    this.setState({
      courses: courses
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" render={(props) => <Content courses={this.state.courses} onDelete={this.handleDeleteCourse.bind(this)}/>}></Route>
        <Route path="/addcourse" render={(props) => <AddCourse addCourse={this.handleSubmitData.bind(this)}/>}></Route>
      </div>
    );
  }
}

export default App;
