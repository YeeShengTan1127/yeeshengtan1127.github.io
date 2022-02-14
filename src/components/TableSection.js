import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import "./TableSection.css";

function TableSection({ data }) {
  return (
    <div className={"w-100 d-flex flex-row justify-content-around py-4"}>
      <Row>
        {data &&
          data
            .sort((a, b) => a.Order - b.Order)
            .map((e, index) => {
              return (
                <Col lg={6} key={"table-" + index}>
                  <div
                    id={e.id}
                    className="d-flex flex-column w-100 mx-2 table-wrapper"
                  >
                    <h4 className="text-center border-bottom py-2">
                      {e.label}
                    </h4>
                    {e.pricelist && (
                      <Table responsive="sm" borderless>
                        <tbody>
                          {e.pricelist.length > 0 &&
                            e.pricelist
                              .sort((a, b) => a.Order - b.Order)
                              .map((f, idx) => {
                                return (
                                  <tr
                                    key={"tr-" + e.label + "-" + idx}
                                    className="fw-lighter"
                                  >
                                    <td className="text-center">{f.sn}</td>
                                    <td>{f.name}</td>
                                    <td className="text-end fst-italic">
                                      {f.price}
                                    </td>
                                  </tr>
                                );
                              })}
                        </tbody>
                      </Table>
                    )}
                  </div>
                </Col>
              );
            })}
      </Row>
    </div>
  );
}

export default TableSection;
