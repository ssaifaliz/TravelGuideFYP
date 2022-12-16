import { Container } from "react-bootstrap";
import { ProfileLargeCard } from "../../../components/cards";

const WalkingTourWorldWide = () => (
  <Container>
    <h1
      style={{
        fontSize: "2rem",
        lineHeight: "2.5rem",
        margin: "4% 0",
      }}
    >
      All Walking Tours worldwide
    </h1>
    <div
      style={{
        margin: "3% 0",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <ProfileLargeCard />
      <ProfileLargeCard />
      <ProfileLargeCard />
      <ProfileLargeCard />
    </div>
    <div
      style={{
        margin: "3% 0",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <ProfileLargeCard />
      <ProfileLargeCard />
      <ProfileLargeCard />
      <ProfileLargeCard />
    </div>
    
  </Container>
);
export default WalkingTourWorldWide;
