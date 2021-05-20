import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap'
function Home(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                <Button color="danger"><Link to='/userlogin'>User</Link></Button>
                </div>
                <div className="col-6">
                <Button color="danger"><Link to='/adminlogin'>Admin</Link></Button>
                </div>
            </div>
        </div>
    );
}
export default Home;