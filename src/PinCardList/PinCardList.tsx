import data from '../Data/PinRepo.json';
import PinCard from '../PinCard/PinCard';
import { Pins } from '../Interface/Pin'; 

function PinCardList(){     
    let dataList : Pins = data;

    return(
        <div>
            <ul>
                {
                    dataList.map((item) => {
                        return <li key={item.id}><PinCard pin={item}/></li>
                    })
                }
            </ul>
        </div>
    )
}

export default PinCardList;