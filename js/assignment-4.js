// ----------- check oddFriend in array --------------------//
function oddFriend(friends) {
    // check friend is valid array or not
    if (friends.length <= 0) {
    return "enter minimum one value in array";
    }

    for (const friend of friends) {
    // check friend value is only string or not
    if (friend >= 0 || friend < 0) {
    return "only string allow in array";
    }
    // check array odd string or not
    if (friend.length % 2 !== 0) {
    console.log(friend);
    }
    }
    }
const fd = ['golap','shakil','abs','sojib']
    oddFriend(fd)

