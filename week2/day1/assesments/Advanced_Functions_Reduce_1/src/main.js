/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function squareKmTotal(parks) {
    const result = parks.reduce((acc, park) => {
        return acc + park.areaInSquareKm;
    }, 0);
                              
    return result;
}

function parkNameAndState(parks) {
    const result = parks.reduce((acc, park) => {
        acc[park.name] = park.location.state;
        return acc
    }, {});
    
    return result;
    
    
}

function parkByState(parks) {
    return parks.reduce((acc, park) => {
    let state = park.location.state;
    if (acc[state] == null) {
        acc[state] = [];
    }
        acc[state].push(park);
        return acc
    }, {});
}

module.exports = { squareKmTotal, parkNameAndState, parkByState };
