import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import calorieIcon from "../assets/icons/calories-icon.png";
import proteinIcon from "../assets/icons/protein-icon.png";
import carbIcon from "../assets/icons/carbs-icon.png";
import lipidIcon from "../assets/icons/fat-icon.png";

import Nutrition from "../components/ui/NutritionCard";
import WeeklyCaloriesWeigth from "../components/charts/WeeklyCaloriesWeight";
import AverageSessions from "../components/charts/AverageSessions";
import PerformanceRadar from "../components/charts/PerformanceRadar";
import Score from "../components/charts/Score";

import {
  getUserAverageSessions,
  getUserInformations,
  getUserActivityInformations,
  getUserPerformance,
} from "../services/serviceApi";

/**
 * Displays the user's dashboard using their ID from the URL.
 * @returns {JSX.Element}
 */

function Home() {
  const navigate = useNavigate();
  // Extract the user ID from the URL
  const { id } = useParams();
  const userId = Number(id);

  // Initialize state for all user-related data
  const [userInfos, setUserInfos] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  // Fetch all user data on component mount
  useEffect(() => {
    getUserInformations(userId)
      .then((data) => {
        setUserInfos(data.data || data);
      })
      .catch((error) => {
        console.error(error);
        navigate("/404", { replace: true });
      });
    getUserActivityInformations(userId).then((data) => {
      console.log("userActivity retourné :", data.data || data); // Affiche l'objet dans la console
      setUserActivity(data.data || data);
    });
    getUserAverageSessions(userId).then((data) => {
      console.log("userAverageSessions retourné :", data.data || data); // Affiche l'objet dans la console
      setUserAverageSessions(data.data || data);
    });
    getUserPerformance(userId).then((data) => {
      console.log("userPerformance retourné :", data.data || data); // Affiche l'objet dans la console
      setUserPerformance(data.data || data);
    });
  }, [userId, navigate]);

  return (
    <div className="home">
      <div className="dashboard-header">
        <h1>
          Bonjour{" "}
          <span className="dashboard-name">
            {userInfos && userInfos.userInfos && userInfos.userInfos.firstName}
          </span>
        </h1>
        <p>Félicitations, vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="dashboard">
        <div className="charts-container">
          {userActivity && userActivity.sessions && (
            <WeeklyCaloriesWeigth sessions={userActivity.sessions} />
          )}
          <div className="mini-charts">
            {userAverageSessions && (
              <AverageSessions averageSessions={userAverageSessions} />
            )}
            {userPerformance &&
              userPerformance.kind &&
              userPerformance.data && (
                <PerformanceRadar
                  kind={userPerformance.kind}
                  data={userPerformance.data}
                />
              )}
            {userInfos && (
              <Score score={userInfos.todayScore ?? userInfos.score} />
            )}
          </div>
        </div>
        <div className="nutrition-container">
          <Nutrition
            icon={calorieIcon}
            value={
              userInfos && userInfos.keyData && userInfos.keyData.calorieCount
            }
            unit="kCal"
            label="Calories"
          />
          <Nutrition
            icon={proteinIcon}
            value={
              userInfos && userInfos.keyData && userInfos.keyData.proteinCount
            }
            unit="g"
            label="Protéines"
          />
          <Nutrition
            icon={carbIcon}
            value={
              userInfos &&
              userInfos.keyData &&
              userInfos.keyData.carbohydrateCount
            }
            unit="g"
            label="Glucides"
          />
          <Nutrition
            icon={lipidIcon}
            value={
              userInfos && userInfos.keyData && userInfos.keyData.lipidCount
            }
            unit="g"
            label="Lipides"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
