import React, {Component} from 'react';

class Items extends Component {
    deleteCourse(id) {
        this.props.onDelete(id);
    }
    render(){
        return(
            <div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={this.props.course.image} alt="Avatar" style={{width: '100%'}} height="190" />
                        <div className="container">
                            <h4 key={this.props.index}><b>{this.props.course.title}</b></h4> 
                            <p>{this.props.course.category}</p> 
                            <a className="btn btn-xs btn-danger" onClick={this.deleteCourse.bind(this, this.props.course.id)}>Hapus</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Items;