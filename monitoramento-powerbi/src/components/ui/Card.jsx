import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const CustomCard = ({title, image, id, url}) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Card.Img variant="top" src={image} className='h-25'/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button className='w-100' onClick={()=> navigate(`/panel/${id}?url=${encodeURIComponent(url)}`) } variant="success">Visualizar Painel</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;