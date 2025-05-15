function ActivityButton({ icon, activity }) {
  return (
    <div className="activity-button">
      <img src={icon} alt={`Icône du bouton : ${activity}`} />
    </div>
  );
}

export default ActivityButton;
