import React from "react";
import { Col, Table } from "react-bootstrap";

function TableSection({ data }) {
  return (
    <>
      {data && (
        <Col lg={6} className="d-flex flex-column align-item-center">
          <h4 className="text-center border-bottom py-2">{"Pricing"}</h4>
          {data.pricelist && (
            <Table responsive="sm" borderless>
              <tbody>
                {data.pricelist.length > 0 &&
                  data.pricelist
                    .sort((a, b) => a.Order - b.Order)
                    .map((f, idx) => {
                      return (
                        <tr
                          key={"tr-" + data.label + "-" + idx}
                          className="fw-lighter"
                        >
                          <td className="text-center">{f.sn}</td>
                          <td>{f.name}</td>
                          <td className="text-end fst-italic">{f.price}</td>
                        </tr>
                      );
                    })}
              </tbody>
            </Table>
          )}
        </Col>
      )}
    </>
  );
}

export default TableSection;
