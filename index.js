// Code your solution in this file!
function distanceFromHqInBlocks (blocks){
  return Math.abs(blocks-42)
}

function distanceFromHqInFeet (blocks){
  const distanceInFeet = distanceFromHqInBlocks(blocks)
  return distanceInFeet*264
}

function distanceTravelledInFeet (starting,stop){
  const distanceCovered = Math.abs(starting-stop)
  return distanceCovered * 264
}

function calculatesFarePrice (starting,stop){
  const feetTravelled = distanceTravelledInFeet(starting,stop)
  if (feetTravelled<=400){
       return 0;
  }else if (feetTravelled<=2000){
       return (feetTravelled-400)*0.02
  }else if (feetTravelled<=2500){
       return 25;
  } else {
       return 'cannot travel that far'
  } 
}

