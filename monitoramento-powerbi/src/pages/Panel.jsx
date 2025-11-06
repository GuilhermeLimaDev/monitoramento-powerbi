import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import IframeSection from "../components/IframeSection";

const Panel = () => {
  return (
    <Container fluid className="vh-100 d-flex flex-column py-3">
      <Navigation/>
      <IframeSection/>
    </Container>
  );
};

export default Panel;
