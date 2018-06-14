import React, {Component} from 'react';
import axios from 'axios';

class User extends Component {
    state = {
        userData: [],
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then((getData) => {
            console.log(getData);
            this.setState({
                userData : getData.data,
            });
        });
    }
    render(){
        const datauser = this.state.userData.map((user, index) => {
            var id = user.id;
            var name = user.name;
            var email = user.email;
            var address = [
                user.address.street,
                user.address.city
            ].join(', ');
            return <tr key={index}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
        </tr>;
        });
        return(
            <div className="container">
                <div className="col-md-10">
                    <h2>User API</h2><hr style={{border: '1px solid black'}}/>
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datauser}
                        </tbody>
                    </table> 
                </div>
            </div>
        );
    }
}
export default User;