    /*  
        З випадаючого списку вибираємо клас квитка у літаку. Якщо 
        1) бізнес -  виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают 
        2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.
    */

import { useState } from 'react'
import '../App.css'
import BusinessService from './flightTicketClass/BusinessService.jsx'
import EconomService from './flightTicketClass/EconomService.jsx'
function TicketClass() {
    
    const imgBusiness = "https://www.evaair.com/sc-cn/images/rl_logo_tcm29-93486.jpg"
    const imgEconomy = "https://www.flyhpa.com/files/2017/07/2017.07.06-06.53-flyhpa-595e871fc6722.jpg"
    const imgAirplane = "https://calaero.edu/wp-content/uploads/2018/05/Airplane-Landings.jpg"
    const [ticketType, setTicketType] = useState('');

    function handleTicketTypeChange(e) {
        setTicketType(e.target.value);
    }

    function getBackgroundImage() {
      if (!ticketType) return imgAirplane;
      if (ticketType === "business") return imgBusiness;
      return imgEconomy;  
    }

    return ( 
        <div  className = "task" style={{ backgroundImage: `url(${getBackgroundImage()})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '20px', color: 'white' }}>
            <div className = "task2Element">
                <h1>Task 2</h1>
                <select onChange={handleTicketTypeChange} value={ticketType}>
                <option value="">Choose a type of your ticket</option>
                <option value="business">Business</option>
                <option value="economy">Economy</option>
                </select>
                {!ticketType ? null: ticketType === "business" ? <BusinessService /> : <EconomService />}
            </div>
        </div>
     )
}

export default TicketClass;