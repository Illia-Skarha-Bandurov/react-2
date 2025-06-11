import { useState } from 'react';

function EconomService() {
  const [drinkSelection, setDrinkSelection] = useState('');
  const [foodSelection, setFoodSelection] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
      <div style={{marginTop: "10px"}}>
        <label style={{marginRight: "14px"}}>Would you like to have a snack?</label>
        <select onChange={(e) => setDrinkSelection(e.target.value)} value={drinkSelection}>
          <option value="">Choose a snack</option>
          <option value="crisps">Crisps</option>
          <option value="fries">Fries</option>
          <option value="peanuts">Peanuts</option>
          <option value="peperami">Peperami</option>
        </select>
      </div>
      <div style={{marginTop: "10px"}}>
        <label style={{marginRight: "23px"}}>Would you like to have a drink?</label>
        <select onChange={(e) => setFoodSelection(e.target.value)} value={drinkSelection}>
          <option value="">Choose a drink</option>
          <option value="water">Water</option>
          <option value="tea">Tea</option>
          <option value="beer">Beer</option>
          <option value="coke">Coke</option>
          <option value="sprite">Sprite</option>
        </select>
      </div>
    </div>
  );
}

export default EconomService;