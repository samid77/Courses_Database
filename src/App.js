import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Header from './components/Header';
import User from './components/User';
import Photos from './components/Photos';
import Content from './components/Content';
import AddCourse from './components/AddCourse';
import Login from './components/Login';
import Welcome from './components/Welcome';
import ToDo from './components/ToDo';
import Dropdown from './components/Dropdown';
import Dropdown2 from './components/Dropdown2';
import Bitcoin from './components/Bitcoin';
import BTCToRp from './components/BTCToRp';
import RpToBTC from './components/RpToBTC';
import soccerPlayer from './components/soccerPlayer';
import Weather from './components/Weather';
import exerciseAPI from './components/exerciseAPI';
import APIexercise from './components/APIexercise';
import WorldCup from './components/WorldCup';

import './App.css';
import {Route} from 'react-router-dom';

class App extends Component {
  state = {
    courses: [],
    kursus: [],
  }
  ambilNama = (namaku) => {
    this.setState({
      welcomename: namaku,
    });
  }
  getCourses(){
    $.ajax({
      url: 'https://my-json-server.typicode.com/samid77/coursesAPI/courses',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({
          kursus: data
        }, function(){
          // console.log(this.state);
        });
      }.bind(this), 
        error: function(xhr, status, err){
          console.log(err);
        }
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
    this.getContent();
  }
  componentDidMount(){
    this.getCourses();
    this.getContent();
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
        <Route path="/user" component={User}></Route>
        <Route path="/photos" component={Photos}></Route>
        <Route path="/todo" component={ToDo}></Route>
        <Route path="/dropdown" component={Dropdown}></Route>
        <Route path="/dropdown2" component={Dropdown2}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/welcome" component={Welcome}></Route>
        <Route path="/soccer" component={soccerPlayer}></Route>
        <Route path="/indexbtc" component={Bitcoin}></Route>
        <Route path="/BTCToRp" component={BTCToRp}></Route>
        <Route path="/RpToBTC" component={RpToBTC}></Route>
        <Route path="/weather" component={Weather}></Route>
        <Route path="/exerciseAPI" component={exerciseAPI}></Route>
        <Route path="/APIexercise" component={APIexercise}></Route>
        <Route path="/WorldCup" component={WorldCup}></Route>
      </div>
    );
  }
}

export default App;
