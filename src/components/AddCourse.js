import React, {Component} from 'react';
import uuid from 'uuid';
// import {Link, Route} from 'react-router-dom';


class AddCourse extends Component {
    state = {
        newCourse: {}
    }
    static defaultProps = {
        categories : ['Front-End', 'Back-End', 'Mobile Development', 'Dev-Ops', 'Database']
    }
    submitData(e){
        if(this.refs.title.value === ''){
            alert('Title is required');
        } else {
            this.setState({
                newCourse: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value,
                    image: this.refs.image.value,                    
                }
            }, function(){
                this.props.addCourse(this.state.newCourse);
            });
        }
        e.preventDefault();   
    }
    render(){
        let courseCategory = this.props.categories.map((category, index) => {
            return <option key={index} value={category}>{category}</option>
        });
        return(
            <div className="container">
                <div className="col-md-8 col-md-offset-2" onSubmit={this.submitData.bind(this)}>
                    <form className="form-horizontal">
                        <fieldset>
                            <legend>Add Course</legend>
                            <div className="form-group">
                                <label className="col-lg-2 control-label">Course Title</label>
                                <div className="col-lg-10">
                                    <input type="text" ref="title" className="form-control" placeholder="Course Title" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-2 control-label">Select Category</label>
                                <div className="col-lg-10">
                                    <select className="form-control" ref="category">
                                        {courseCategory}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-2 control-label">Image title</label>
                                <div className="col-lg-10">
                                    <input type="text" ref="image" className="form-control" placeholder="Course Image" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-lg-10 col-lg-offset-2">
                                    <button type="reset" className="btn btn-default">Cancel</button>
                                    <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}
export default AddCourse;