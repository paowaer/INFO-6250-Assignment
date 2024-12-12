export function fetchSession() {
  return fetch("api/session", {
    method: "GET",
  })
    .catch((err) => Promise.reject(err))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
        .json()
        .catch((error) => Promise.reject({ error }))
        .then((err) => Promise.reject(err));
    });
}

export function fetchLogin(username) {
  return fetch("/api/session", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({ username }),
  })
    .catch((err) => Promise.reject(err))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
        .json()
        .catch((error) => Promise.reject({ error }))
        .then((err) => Promise.reject(err));
    });
}

export function fetchLogout() {
  return fetch("/api/session", {
    method: "DELETE",
  })
    .catch((err) => Promise.reject(err))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
        .json()
        .catch((error) => Promise.reject({ error }))
        .then((err) => Promise.reject(err));
    });
}

export function fetchAllCats() {
  return fetch("api/cats", {
    method: "GET",
  })
    .catch((err) => Promise.reject(err))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
        .json()
        .catch((error) => Promise.reject({ error }))
        .then((err) => {
          return Promise.reject(err);
        });
    });
}

export function fetchAddCat(cat) {
  return fetch("/api/cats", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(cat),
  })
    .catch((err) => Promise.reject(err))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
        .json()
        .catch((error) => Promise.reject({ error }))
        .then((err) => Promise.reject(err));
    });
}

export function fetchUpdateCatInfo(cat) {
  return fetch("/api/updateCat", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(cat),
  })
    .catch((err) => Promise.reject(err))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
        .json()
        .catch((error) => Promise.reject({ error }))
        .then((err) => Promise.reject(err));
    });
}

export function fetchUpdateCat(catId, action, adopterInfo) {
  return fetch("/api/cats/", {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({ catId, action, adopterInfo }),
  })
    .catch((err) => Promise.reject(err))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
        .json()
        .catch((error) => Promise.reject({ error }))
        .then((err) => Promise.reject(err));
    });
}

export function fetchDeleteCat(catId) {
  return fetch("/api/cats/", {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({ catId }),
  })
    .catch((err) => Promise.reject(err))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
        .json()
        .catch((error) => Promise.reject({ error }))
        .then((err) => Promise.reject(err));
    });
}

export function fetchGetUserProfile() {
  return fetch("/api/users/", {
    method: "GET",
  })
    .catch((err) => Promise.reject(err))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
        .json()
        .catch((error) => Promise.reject({ error }))
        .then((err) => {
          return Promise.reject(err);
        });
    });
}

export function fetchRegisterUser(user) {
  return fetch("/api/users", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(user),
  })
    .catch((err) => Promise.reject(err))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
        .json()
        .catch((error) => Promise.reject({ error }))
        .then((err) => Promise.reject(err));
    });
}

export function fetchUpdateUser(user) {
  return fetch("/api/users", {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(user),
  })
    .catch((err) => Promise.reject(err))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
        .json()
        .catch((error) => Promise.reject({ error }))
        .then((err) => Promise.reject(err));
    });
}

export function fetchUpdateUsersContact(user) {
  return fetch("/api/usersContact", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(user),
  })
    .catch((err) => Promise.reject(err))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
        .json()
        .catch((error) => Promise.reject({ error }))
        .then((err) => Promise.reject(err));
    });
}
