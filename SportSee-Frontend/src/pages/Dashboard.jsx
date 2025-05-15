import mockUserInfos from "../mocks/mockUserInfos.json";
import Nutrition from "../components/ui/NutritionCard";
import calorieIcon from "../assets/icons/calories-icon.png";
import proteinIcon from "../assets/icons/protein-icon.png";
import carbIcon from "../assets/icons/carbs-icon.png";
import lipidIcon from "../assets/icons/fat-icon.png";
import WeeklyCaloriesWeigth from "../components/charts/WeeklyCaloriesWeight";
import AverageSessions from "../components/charts/AverageSessions";
import PerformanceRadar from "../components/charts/PerformanceRadar";
import Score from "../components/charts/Score";

function Dashboard() {
  const { keyData, userInfos } = mockUserInfos.data;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>
          Bonjour <span className="dashboard-name">{userInfos.firstName}</span>
        </h1>
        <p>Félicitations, vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="charts-container">
        <div className="activity-charts">
          <WeeklyCaloriesWeigth />
          <div className="mini-charts">
            <AverageSessions />
            <PerformanceRadar />
            <Score />
          </div>
        </div>
        <div className="nutrition-container">
          <Nutrition
            icon={calorieIcon}
            value={keyData.calorieCount}
            unit="kCal"
            label="Calories"
          />
          <Nutrition
            icon={proteinIcon}
            value={keyData.proteinCount}
            unit="g"
            label="Protéines"
          />
          <Nutrition
            icon={carbIcon}
            value={keyData.carbohydrateCount}
            unit="g"
            label="Glucides"
          />
          <Nutrition
            icon={lipidIcon}
            value={keyData.lipidCount}
            unit="g"
            label="Lipides"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
