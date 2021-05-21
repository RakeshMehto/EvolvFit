import React from "react";
import Nav from "./NavibarLogout";
import { Accordion, Card } from "react-bootstrap";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { DISHES } from "./dishes";
function Admin() {
  return (
    <div>
      {" "}
      <Nav />
      <div className="media-back">
        <div className="container">
          <h1 className="pt-5 mb-5 d-flex justify-content-center">adminPage</h1>
          {DISHES.map((dish) => {
            return (
              <Accordion defaultActiveKey="1" className="">
                <Card className="mt-1 mb-3  acc-tog acc-tog-1">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div className="row pl-5">
                      <div className="col-11 d-flex align-items-center">
                        {dish.name}
                      </div>
                      <div className="col-1 d-flex flex-row-reverse">
                        <img
                          data-toggle="tooltip"
                          data-html="true"
                          title="not working"
                          data-placement="bottom"
                          className=" p-2"
                          src="assets/images/delete.png"
                          height="50px"
                          width="50px"
                          alt="delete"
                        />
                      </div>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" className="acc-col">
                    <Card.Body>{dish.description}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Admin;
