/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/
function getParksByState(parks, state) {
    const parkByState= parks.filter((park) => park.location.state === state);
    return parkByState;
}

function getWishlistParksForUser(parks, users, username) {
    const list = users[username].wishlist;
    
    return parks.reduce((acc,park) => {
	let pid = park.id;
	list.forEach((uid) => {
	    if (pid === uid) acc.push(park);
	    return acc;
	});
	return acc;
    },[]);
}

function userHasVisitedAllParksInState(parks,users,state,userName) {
    const visitedList = users[userName].visited;

    const parksByStateById = parks.filter((park) => {
	return park.location.state === state;
    }).map((park) => park.id);

    const visitedAllParksInState = parksByStateById.every((parkId) => visitedList.includes(parkId));

    return visitedAllParksInState;
}

function userHasVisitedParkOnWishlist(users,userName1,userName2) {
    const visited = users[userName1].visited;
    const wishlist = users[userName2].wishlist;

    return visited.some((id) => wishlist.includes(id));
}

function getUsersForUserWishlist(users,userName) {
    const wishlist = users[userName].wishlist;
    const userList = Object.entries(users);

    return userList.reduce((acc,user) => {
	const name = user[0]; 
	const visited = user[1].visited;
	const didVisit = visited.some((parkId) => wishlist.includes(parkId));

	if (didVisit) acc.push(name);

	return acc;
    },[]);
}




module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
