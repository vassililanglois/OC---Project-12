import axios from "axios";

import mockUserInfos from "../mocks/mockUserInfos.json";
import mockActivity from "../mocks/mockActivity.json";
import mockAverageSessions from "../mocks/mockAverageSessions.json";
import mockPerformance from "../mocks/mockPerformance.json";

const BASE_URL = "http://localhost:3000";

// Allow to use mock data (false) or the API (true)
const isMock = false;

/**
 * Get user informations
 * @param {number} id user id
 * @returns {Promise<Object>} data: informations of the user
 */
export async function getUserInformations(id) {
  if (isMock === true) {
    return mockUserInfos;
  } else {
    try {
      const response = await axios.get(`${BASE_URL}/user/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Unable to fetch user informations: ${error.message}`);
    }
  }
}

/**
 * Get user activity information
 * @param {number} id user id
 * @returns {Promise<Object>} data: user activity information
 */
export async function getUserActivityInformations(id) {
  if (isMock === true) {
    return mockActivity;
  } else {
    try {
      const response = await axios.get(`${BASE_URL}/user/${id}/activity`);
      return response.data;
    } catch (error) {
      throw new Error(`Unable to fetch user informations: ${error.message}`);
    }
  }
}

/**
 * Get user AverageSessions
 * @param {number} id user id
 * @returns {Promise<Object>} data: user AverageSessions
 */
export async function getUserAverageSessions(id) {
  if (isMock === true) {
    return mockAverageSessions;
  } else {
    try {
      const response = await axios.get(
        `${BASE_URL}/user/${id}/average-sessions`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Unable to fetch user informations: ${error.message}`);
    }
  }
}

/**
 * Get user performance
 * @param {number} id user id
 * @returns {Promise<Object>} data : user performance
 */
export async function getUserPerformance(id) {
  if (isMock === true) {
    return mockPerformance;
  } else {
    try {
      const response = await axios.get(`${BASE_URL}/user/${id}/performance`);
      return response.data;
    } catch (error) {
      throw new Error(`Unable to fetch user informations: ${error.message}`);
    }
  }
}
