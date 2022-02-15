import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ContentSection.css";
import TableSection from "./TableSection";

function ContentSection({ data }) {
  return (
    data &&
    data
      .sort((a, b) => a.Order - b.Order)
      .map((e, index) => {
        return (
          <Container id={"content-" + index} className="my-3">
            <Row>
              <Col lg={6} className="d-flex flex-column align-item-center">
                <h4 className="text-center border-bottom py-2">
                  {"About " + e.label}
                </h4>
                <p className="text-justify">{e.text2}</p>
              </Col>
              <TableSection data={e} />
            </Row>
          </Container>
        );
      })
  );
}

export default ContentSection;
