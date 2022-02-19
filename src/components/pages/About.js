import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../App.css";

export default function About() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <h1 className="about">About</h1>

      <Container>
        <Row>
          <Col lg={12}>
            <div className="p-2">
              <h2 className="text-center">{"Our Company"}</h2>
              <p className="text-justify">
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                }
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="p-2">
              <h2 className="text-center">{"Our Vision"}</h2>
              <p className="text-justify">
                {
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                }
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="p-2">
              <h2 className="text-center">{"Our Mission"}</h2>
              <p className="text-justify">
                {
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                }
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
