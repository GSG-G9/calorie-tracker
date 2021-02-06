const calculateDailyCalories = (gender, activity, weight, height, age) => {
  let dailyCaloriesGoal;
  let metabolisim;

  if (gender === "m") {
    metabolisim = weight * 100 + height * 6.25 - age * 5 + 5;
  } else {
    metabolisim = weight * 10 + height * 6.25 - age * 5 - 161;
  }

  if (activity === "very active") {
    dailyCaloriesGoal = metabolisim * 1.725;
  } else if (activity === "active") {
    dailyCaloriesGoal = metabolisim * 1.55;
  } else if (activity === "light active") {
    dailyCaloriesGoal = metabolisim * 1.375;
  } else {
    dailyCaloriesGoal = metabolisim * 1.25;
  }
  return parseInt(dailyCaloriesGoal);
};
module.exports = calculateDailyCalories;
