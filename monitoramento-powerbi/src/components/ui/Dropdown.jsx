import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

const CustomDropdown = ({ panels }) => {
    const navigate = useNavigate();
    const [selectedPanel, setSelectedPanel] = useState(null);

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedPanel ? selectedPanel.title : 'Selecione um Painel'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {panels.map(panel => (
                    <Dropdown.Item
                        key={panel.id}
                        onClick={() => {
                            setSelectedPanel(panel); 
                            navigate(`/panel/${panel.id}?url=${encodeURIComponent(panel.link)}`);
                        }}
                    >
                        {panel.title}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CustomDropdown;
