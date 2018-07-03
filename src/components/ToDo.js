import React, {Component} from 'react';
import axios from 'axios';

class ToDo extends Component {
    state = {
        todoData: [],
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos').then((getData) => {
            console.log(getData);
            this.setState({
                todoData: getData.data,
            });
        });
    }
    render(){
        const dataItems = this.state.todoData.map((todo, index) => {
            var id = todo.id;
            var title = todo.title;
            var status = todo.completed;
            if(status === true){
                return <li className="list-group-item" key={index}>
              <span className="badge">√</span>
              {title}
            </li>      
            } else {
                return <li className="list-group-item" key={index}>
              <span className="badge"></span>
              {title}
            </li>
            }
            

        });
        return(
            <div className="container">
                <div className="col-md-6">
                    <ul className="list-group">
                        {dataItems}
                    </ul>
                </div>
            </div>
        );
    }
}
export default ToDo;