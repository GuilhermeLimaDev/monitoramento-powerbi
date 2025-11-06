import { useEffect, useState } from "react";
import PanelService from "../service/PanelService";
import CustomDropdown from "./ui/Dropdown";
import { useNavigate } from "react-router-dom";

const Navigation = () => {

    const [panels, setPanels] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        PanelService.getPanels().then((data) => setPanels(data));
    }, []);

    return (
        <nav className="d-flex justify-content-center align-items-center mb-4 mx-2">
            <CustomDropdown panels={panels} />
            <button className="btn btn-primary" onClick={() => navigate('/')}>Voltar</button>
        </nav>
    )
}

export default Navigation;