import { Pin } from "../Interface/Pin";
import "./PinCard.css";

interface PinCardProps { 
    pin : Pin;
}

function PinCard(pinData: PinCardProps){

    return(
        <div>
            <img className="card" src = {pinData.pin.img} alt={pinData.pin.description}></img>
        </div>
    )
}

export default PinCard;