/**
 * React component to display a button.
 *
 * @param {string} icon - the src path for the icon.
 * @param {string} activity - the acitivity name for the alt description.
 *
 * @returns {JSX.Element}
 *
 * @description
 * This component uses data to display link to another page as a button in the sidenav.
 */

function ActivityButton({ icon, activity }) {
  return (
    <div className="activity-button">
      <img src={icon} alt={`Icône du bouton : ${activity}`} />
    </div>
  );
}

export default ActivityButton;
