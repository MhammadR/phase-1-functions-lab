function distanceFromHqInBlocks(num) {
  return Math.abs(42 - num);
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2) {
  return Math.abs(num1 - num2) * 264;
}

function calculatesFarePrice(num1, num2) {
  if (Math.abs(num1 - num2) === 1) return 0;
  const travelInFeet = distanceTravelledInFeet(num1, num2);
  if (travelInFeet > 400 && travelInFeet <= 2000)
    return (travelInFeet - 400) * 0.02;
  if (travelInFeet > 2000 && travelInFeet <= 2500) return 25;
  if (travelInFeet > 2500) return "cannot travel that far";
}

