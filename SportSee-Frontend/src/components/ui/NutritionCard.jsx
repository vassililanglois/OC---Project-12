/**
 * React component to display the user's nutrition statistics as a card.
 *
 * @param {string} icon - the src path for the icon.
 * @param {number} value - the data value to display.
 * @param {string} unit - the unit wich is linked to the value.
 * @param {string} label - the icon name for the alt description.
 *
 * @returns {JSX.Element}
 *
 * @description
 * This component uses data to display the user's nutrition statistics as a card.
 */

function Nutrition({ icon, value, unit, label }) {
  return (
    <div className="nutrition-card">
      <img src={icon} alt={`${label} icon`} className="nutrition-icon" />

      <div className="nutrition-info">
        <p className="nutrition-value">
          {value}
          {unit}
        </p>
        <p className="nutrition-label">{label}</p>
      </div>
    </div>
  );
}

export default Nutrition;
