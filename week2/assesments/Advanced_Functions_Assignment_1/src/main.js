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
    let list = users[username].wishlist;
    let accum = []
    
    parks.map((park) => {
	let parkID = park.id;
	
	list.forEach((id) => {
	    
	    if (id === parkID) {
		accum.push(park);
	    }
	});
    });
    return accum;
}

function userHasVisitedAllParksInState(parks,users,state,userName) {
    let visitedList = users[userName].visited;

    const parksByStateById = parks.filter((park) => {
	return park.location.state === state;
    }).map((park) => park.id);

    const visitedAllParksInState = parksByStateById.every((parkId) => visitedList.includes(parkId));

    return visitedAllParksInState;
}

function userHasVisitedParkOnWishlist(users,userName1,userName2) {
    let visited = users[userName1].visited;
    let wishlist = users[userName2].wishlist;

    return visited.some((id) => wishlist.includes(id));
}

function getUsersForUserWishlist(users,userName) {
    let wishlist = users[userName].wishlist;
    // let newUserList = [];

    // for (let user in users) {
    // 	let visited = users[user].visited;
    // 	user = { name: user, visited };
    // 	newUserList.push(user);
    // }

    // const hasVisited = newUserList.filter((user) => {
    // 	let visited = user.visited;
    // 	return wishlist.includes(visited);
    // });

    // console.log(hasVisited);
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
