import { useState } from 'react';

function BusinessService() {
  const [drinkSelection, setDrinkSelection] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
      <div>
        <label style={{marginRight: "10px"}}>Would you like to have a morning newspaper?</label>
        <input style={{marginTop: "20px"}} type="checkbox" />
      </div>
      <div style={{marginTop: "10px"}}>
        <label style={{marginRight: "23px"}}>Would you like to have a drink?</label>
        <select onChange={(e) => setDrinkSelection(e.target.value)} value={drinkSelection}>
          <option value="">Choose a drink</option>
          <option value="cognac">Cognac</option>
          <option value="whiskey">Whiskey</option>
          <option value="champagne">Champagne</option>
        </select>
        {drinkSelection === 'cognac' ? (
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', marginTop: "10px" }}>
              <label style={{marginRight: "20px"}} >Would you like to have some food?</label>
              <input type="checkbox" />
          </div>
          ) : null}
      </div>
    </div>
  );
}

export default BusinessService;