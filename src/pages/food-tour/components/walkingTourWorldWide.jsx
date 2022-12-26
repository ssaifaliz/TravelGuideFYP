import { Container } from "react-bootstrap";
import { ProfileLargeCard } from "../../../components/cards";

const WalkingTourWorldWide = () => (
  <Container>
    <h1
      style={{
        fontSize: "2rem",
        lineHeight: "2.5rem",
        width: "40%",
        margin: " 30px auto",
        textAlign: "center",
        borderBottom: "2px solid #f7943c",
        paddingBottom:'10px',
      }}
    >
      All Food Tours worldwide
    </h1> 
    <div
      style={{
        margin: "3% 0",
      }}
      className="row"
    >
      <div className="col-md-4">
      <ProfileLargeCard />
      </div>
      <div className="col-md-4">
      <ProfileLargeCard />
      </div>
      <div className="col-md-4">
      <ProfileLargeCard />
      </div>
      
    </div>
    <div
      style={{
        margin: "3% 0",
        
      }}
      className="row"
    >
       <div className="col-md-4">
      <ProfileLargeCard />
      </div>
      <div className="col-md-4">
      <ProfileLargeCard />
      </div>
      <div className="col-md-4">
      <ProfileLargeCard />
      </div>
    </div>
    
  </Container>
);
export default WalkingTourWorldWide;
