import React, { Component } from 'react';
import { useState } from 'react';
import { DISHES } from './dishes';
import { Media } from 'reactstrap';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
    render() {
      const [searchTerm, setSearchterm]=useState("");
        const menu = this.state.dishes.filter((dish)=>{
          if(searchTerm==""){
            return dish
          }
          else if (dish.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return dish
          })
        }).map((dish) => {
            return (
              <div>

              <div key={dish.id} className="col-12 mt-5 media-page">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media>
              </div>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row"><input type="text" placeholder="Search Dishes" onChange={(event)=>{setSearchterm(event.target.value);}} /></div>
            <div className="row ">
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default User;