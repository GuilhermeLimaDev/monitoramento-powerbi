import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import PanelService from "../service/PanelService";
import CustomCard from "./ui/Card";

const PanelSection = () => {
  const [panels, setPanels] = useState([]);

  useEffect(() => {
    PanelService.getPanels().then((data) => setPanels(data));
  }, []);

  return (
    <Container fluid className="py-2">
      <Row className="g-4">
        {panels.map((panel) => (
          <Col key={panel.id} xs={12} sm={6} md={4} lg={3}>
            <CustomCard
              id={panel.id}
              title={panel.title}
              image={panel.image}
              url={panel.link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PanelSection;
