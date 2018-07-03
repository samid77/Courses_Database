import React, {Component} from 'react';
import axios from 'axios';

class Photos extends Component {
    state = {
        photosData: [],
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos').then((getData) => {
            console.log(getData);
            this.setState({
                photosData: getData.data,
            });
        });
    }
    render(){
        const datafoto = this.state.photosData.map((photos, index) => {
            var id = photos.id;
            var title = photos.title;
            var image = photos.thumbnailUrl;
            return <div className="col-md-4"><div className="card" key={index}>
            <img src={image} alt="Avatar" style={{width: '100%'}} height="190" />
            <div className="container">
                <h4 style={{wordWrap:'break-word'}}key={index}><b>{title}</b></h4> 
                <p>{title}</p>
            </div>
        </div>
        </div>
        });
        return(
            <div className="container">
                <div className="col-md-12">
                    <h2>Photos API</h2><hr style={{border: '1px solid black'}}/>
                    <div className="row">

                    </div>
                </div>
            </div>
        );
    }
}
export default Photos;