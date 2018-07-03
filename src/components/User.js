import React, {Component} from 'react';
import axios from 'axios';

class User extends Component {
    state = {
        userData: [],
        namaUser: '',
        alamatUser: '',
        emailUser: ''
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then((getData) => {
            console.log(getData);
            this.setState({
                userData : getData.data,
            });
        });
    }
    cariUser = (e) => {
        const name = this.refs.name.value;
        const email = this.refs.email.value;
        const address = this.refs.address.value;
        e.preventDefault();
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((getData) => {
            this.setState({
                namaUser: getData.data.name,
                alamatUser: getData.data.adress,
                emailUser: getData.data.email,
                userData: getData.data
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
                    <form method="post" onSubmit={this.cariUser.bind(this)}>
                        <div class="col-md-5">
                            <div class="form-group">
                                <label>Name:</label>
                                <input type="text" class="form-control" name="name" refs="name"/>
                            </div>
                            <div class="form-group">
                                <label>Address:</label>
                                <input type="text" class="form-control" refs="address"/>
                            </div>
                            <div class="form-group">
                                <label>Email:</label>
                                <input type="text" class="form-control" refs="email"/>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-danger btn-md" type="submit">Search</button>
                            </div>
                        </div>
                    </form>
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