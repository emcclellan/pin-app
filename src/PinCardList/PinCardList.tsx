import data from '../Data/PinRepo.json';
import PinCard from '../PinCard/PinCard';
import { Pins } from '../Interface/Pin'; 
import './PinCardList.css';

function PinCardList(){     
    let dataList : Pins = data;

    return(
        <div className="grid">
                {
                    dataList.map((item) => {
                        return <div className="item" key={item.id}><PinCard pin={item}/></div>
                    })
                }
        </div>
    )
}

export default PinCardList;