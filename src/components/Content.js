import React, {Component} from 'react';
import Items from './Items';

class Content extends Component {
    deleteCourse(id){
        this.props.onDelete(id);
    }
    render(){
        let courseitems;
        if(this.props.courses){
            courseitems = this.props.courses.map((course, index) => {
                return(
                    <Items onDelete={this.deleteCourse.bind(this)} key={index} course={course}/>
                );
            });
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {courseitems}
                    </div>
                </div>
            </div>
        );
    }
}


export default Content;