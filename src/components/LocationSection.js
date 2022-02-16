import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Map from "./Map";
import "./LocationSection.css";

function LocationSection({ data }) {
  return (
    <Container className="my-3">
      <Row>
        {data &&
          data
            .sort((a, b) => a - b)
            .map((e, index) => {
              return (
                <>
                  <Col key={"location-" + index} lg={6}>
                    <Map position={e.Position} />
                  </Col>
                  <Col key={"locationInfo-" + index} lg={6}>
                    <Table responsive>
                      <tbody>
                        <tr>
                          <th>{"Address"}</th>
                          <td>{e.Address}</td>
                        </tr>
                        <tr>
                          <th>{"Phone"}</th>
                          <td>{e.Phone}</td>
                        </tr>
                        <tr>
                          <th>{"Mobile"}</th>
                          <td>{e.Mobile}</td>
                        </tr>
                        <tr>
                          <th>{"Email"}</th>
                          <td>{e.Email}</td>
                        </tr>
                        <tr>
                          <th>{"Business Hour"}</th>
                          <td>{e.BusinessHour}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </>
              );
            })}
      </Row>
    </Container>
  );
}

export default LocationSection;
