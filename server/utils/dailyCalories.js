const calculateDailyCalories = ({
  gender,
  weight,
  height,
  age,
  activityValue,
}) => {
  let metabolisim;
  const factor = weight * 10 + height * 6.25 - age * 5;

  if (gender === 'm') {
    metabolisim = factor + 5;
  } else {
    metabolisim = factor - 161;
  }

  return parseInt(metabolisim * activityValue, 10);
};
module.exports = calculateDailyCalories;
