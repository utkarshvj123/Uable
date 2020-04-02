import React from "react";
import book from "../../../assets/Images/book.png";
import styled from "styled-components";
import ImageProcess from "../../../component/ImageProcess";
import Badges from "../../../component/Badges";

const Card = styled.div`
  border-radius: 15px;
`;
const Row = styled.div`
  margin-top: 20px;
`;

export default function RecentCards(props) {
  const { recent } = props;
  console.log(recent, "........from recent compo");
  return (
    <React.Fragment>
      <div className="container px-0">
        <Row className="row">
          {recent.map(object => (
            <div className="col-sm pl-0">
              <Card className="card">
                <ImageProcess images={object.images}></ImageProcess>
                <div className="card-body">
                  <h5 className="card-title">{object.heading}</h5>
                  <div className="d-flex flex-column">
                    <div>updated</div>
                    <div>
                      <Badges
                        color={object.colors}
                        background={object.background}
                        content={object.subject}
                        styleObj={{
                          "font-size": "75%",
                          "font-weight": "700",
                          "border-radius": "0.25rem"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </Row>
      </div>
    </React.Fragment>
  );
}
