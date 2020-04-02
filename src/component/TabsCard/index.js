import React from "react";
import book from "../../assets/Images/book.png";
import styled from "styled-components";
import "../TabsCard/style.css";
import PropTypes from 'prop-types';


const LowerContent = styled.div`
  padding-left: 0px;
  padding-right: 0px;
`;
const Card = styled.div`
  border-radius: 15px;
`;
const Row = styled.div`
  margin-top: 66px;
  font-size: 12px;
`;

const Column = styled.div`
  width: 50%;
`;

const Img = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export default function TabsCard(props) {
  const {selected}=props;
  return (
    <React.Fragment>
      <div>
        <Row className="row">
          {selected.map(object => (
            <div className="col-md-3">
              <Card className="card">
                <Img src={book} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{object.heading}</h5>
                  <div>
                    <div className="d-flex row">
                      <Column>{object.title}</Column>
                      <Column>{object.title}</Column>
                    </div>
                    <div className="d-flex row">
                      <Column className="d-flex">
                        <LowerContent>Completed</LowerContent>
                        <div>:{object.completed}</div>
                      </Column>
                      <Column className="d-flex">
                        <LowerContent>Remaining</LowerContent>
                        <div>:{object.remaining}</div>
                      </Column>
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

TabsCard.defaultProps = {
  selected:[
    {
      heading: "History",
      title: "Session",
      completed: 1,
      remaining: 2
    },
    {
      heading: "Botany",
      title: "Session",
      completed: 2,
      remaining: 4
    },
    {
      heading: "Chemisty",
      title: "Session",
      completed: 1,
      remaining: 3
    }
  ]
};
TabsCard.propTypes = {
  selected:PropTypes.array
};
