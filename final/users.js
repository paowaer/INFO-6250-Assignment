const users = {
  boogy: {
    email: "boogy@northeastern.com",
    phone: "123-456-7890",
    address: "225 Terry Ave N, Seattle, WA 98109",
    isAdmin: true,
    reservations: [],
  },
};

function isValid(username) {
  let isValid = true;
  isValid = !!username && username.trim();
  isValid = isValid && /^[A-Za-z0-9_]+$/.test(username);
  return isValid;
}

function isPermitted(username) {
  const forbiddenUsernames = ["dog"];
  return !forbiddenUsernames.includes(username.toLowerCase());
}

function addUserProfile(userData) {
  const { username } = userData;
  if (users[username]) return false;
  users[username] = {
    email: "",
    phone: "",
    address: "",
    isAdmin: false,
    reservations: [],
  };
  return {
    ...users[username],
    username,
  };
}

function getUserProfile(username) {
  return users[username] || null;
}

function addUserReservation(username, catId, adopterInfo) {
  const user = getUserProfile(username);
  if (user) {
    const targetReservations = user.reservations.find(
      (res) => res.catId === catId
    );
    if (targetReservations) {
      targetReservations.adopterInfo = adopterInfo;
    } else {
      user.reservations.push({ catId, adopterInfo });
    }
  }
  return true;
}

function removeUserReservation(username, catId) {
  const user = getUserProfile(username);
  const index = user?.reservations.findIndex((res) => res.catId === catId);
  if (index > -1) {
    user.reservations.splice(index, 1);
  }
  return true;
}

export default {
  isValid,
  isPermitted,
  addUserProfile,
  getUserProfile,
  addUserReservation,
  removeUserReservation,
};
