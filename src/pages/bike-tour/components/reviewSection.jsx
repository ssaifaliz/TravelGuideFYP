import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const EachReview = () => (
  <div>
    <div className="w-100 d-flex align-items-center" style={{}}>
      <div style={{}}>
        <img
          alt="sdfgh"
          src="https://withlocals-com-res.cloudinary.com/image/upload/w_830,h_467,c_fill,g_auto,q_auto,dpr_1.0,f_auto/818c031f15dae0b81b5458b8b120e86e"
          style={{
            borderRadius: "100%",
            border: "3px solid #fff",
            background: "#fff",
            width: "4rem",
            height: "4rem",
            display: "inline-block",
            position: "relative",
            zIndex: 1,
          }}
        />
        <img
          alt="sdfgh"
          src="https://withlocals-com-res.cloudinary.com/image/upload/w_830,h_467,c_fill,g_auto,q_auto,dpr_1.0,f_auto/818c031f15dae0b81b5458b8b120e86e"
          style={{
            borderRadius: "100%",
            border: "3px solid #fff",
            background: "#fff",
            width: "4rem",
            height: "4rem",
            display: "inline-block",
            position: "relative",
            zIndex: 1,
            marginLeft: "-15%",
          }}
        />
      </div>
      <div style={{}}>
        <p
          style={{
            fontWeight: 500,
            fontSize: "1rem",
            margin: 0,
          }}
        >
          Eileen
        </p>
        <p
          style={{
            fontSize: ".875rem",
            fontWeight: 500,
            margin: 0,
          }}
        >
          About local Ellie
        </p>
        <div className="d-flex align-items-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p
            style={{
              fontSize: ".875rem",
              fontWeight: 500,
              color: "grey",
              marginLeft: "4px",
            }}
            className="my-0"
          >
            15 November 2022
          </p>
        </div>
      </div>
    </div>
    <p
      style={{
        fontSize: "1rem",
        fontWeight: 600,
        color: "#4a4a4a",
        lineHeight: "1rem",
        paddingBottom: "1rem",
        margin: "1% 0",
      }}
    >
      Great personalized tour - local knowledge
    </p>
    <p>
      Our walking tour with Ellie far exceeded our expectations! Ellie was
      extremely knowledgeable and showed us around Barcelona with a local’s eye
      on all of the different architecture and history the city has to offer.
      The pace and amount of information shared over the 4 hours of our tour was
      perfect. We couldn’t have asked for more, Ellie was fantastic! We highly
      recommend spending your time with her in Barcelona.
    </p>
    <p style={{ fontWeight: 500, color: "#70ab43" }}>
      Park Guell & Gaudi's Finest: Skip the Line
    </p>
  </div>
);
const ReviewSection = () => (
  <Container>
    <h1
      style={{
        fontSize: "2rem",
        lineHeight: "2.5rem",
        width: "55%",
        margin: " 30px auto",
        textAlign: "center",
        borderBottom: "2px solid #f7943c",
        paddingBottom: "10px",
      }}
    >
      What other travelers love about our local experts
    </h1>
    <EachReview />
    <EachReview />
  </Container>
);
export default ReviewSection;
