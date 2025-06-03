/**
 * React component to display the sidenav.
 *
 * @returns {JSX.Element}
 *
 * @description
 * This component display the sidenav wich contains ActivityButtons components
 * and the copyright tag.
 */

import ActivityButton from "../components/ui/ActivityButton";
import yogaIcon from "../assets/icons/yoga-icon.png";
import swimmingIcon from "../assets/icons/swimming-icon.png";
import cyclingIcon from "../assets/icons/cycling-icon.png";
import trainingIcon from "../assets/icons/training-icon.png";

function SideNav() {
  return (
    <div className="sidenav">
      <div className="activity-buttons">
        <ActivityButton icon={yogaIcon} activity="yoga" />
        <ActivityButton icon={swimmingIcon} activity="natation" />
        <ActivityButton icon={cyclingIcon} activity="cyclisme" />
        <ActivityButton icon={trainingIcon} activity="musculation" />
      </div>
      <p>Copyright, SportSee 2020</p>
    </div>
  );
}

export default SideNav;
