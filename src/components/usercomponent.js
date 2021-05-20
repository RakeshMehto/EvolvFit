import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { DISHES } from './dishes';
import { Media } from 'reactstrap';

function User () {
      const [searchTerm, setSearchterm]=useState("");

        return (
          <div className="media-back">
          <div className="container ">
            <div className="row"><input className="searchInput" type="text" placeholder="Search Dishes" onChange={(event)=>{setSearchterm(event.target.value);}} /></div>
            <div className="row ">
              <Media list>
             { DISHES.filter((dish)=>{
          if(searchTerm==""){
            return dish
          }
          else if (dish.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return dish
          }
        }).map((dish) => {
          return(
              <div>

              <div key={dish.id} className="col-12 media-page ">
                <Media tag="li" className="mt-2 mb-2 pt-5 pb-5 ">
                  <Media left middle>
                      <Media height="110px" width="110px" object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media>
              </div>
              </div>
            );
          })}
          </Media>
          </div>
          </div>
          </div>

        );
    }


export default User;