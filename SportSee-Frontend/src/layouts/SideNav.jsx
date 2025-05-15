import ActivityButton from "../components/ui/ActivityButton";

function SideNav() {
  return (
    <div className="sidenav">
      <div className="activity-buttons">
        <ActivityButton
          icon="./src/assets/icons/yoga-icon.png"
          activity="yoga"
        />
        <ActivityButton
          icon="./src/assets/icons/swimming-icon.png"
          activity="natation"
        />
        <ActivityButton
          icon="./src/assets/icons/cycling-icon.png"
          activity="cyclisme"
        />
        <ActivityButton
          icon="./src/assets/icons/training-icon.png"
          activity="musculation"
        />
      </div>
      <p>Copyright, SportSee 2020</p>
    </div>
  );
}

export default SideNav;
