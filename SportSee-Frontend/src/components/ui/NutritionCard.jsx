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
