import {
  fetchSession,
  fetchLogin,
  fetchLogout,
  fetchAllCats,
  fetchAddCat,
  fetchUpdateCatInfo,
  fetchDeleteCat,
  fetchUpdateUser,
  fetchRegisterUser,
  fetchUpdateUsersContact,
} from "./services";
import Cats from "./Cats";
import AddCat from "./AddCat";
import UpdateCat from "./UpdateCat";
import Header from "./Header";
import Footer from "./Footer";
import Status from "./Status";
import Message from "./Message";
import Register from "./Register";
import LoginForm from "./LoginForm";
import MyProfile from "./MyProfile";
import Reservation from "./Reservation";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [cats, setCats] = useState([]);
  const [error, setError] = useState("");
  const [cat, setCat] = useState({});
  const [message, setMessage] = useState("");

  const fetchCats = () => {
    setError("");
    fetchAllCats()
      .then((data) => setCats(data))
      .catch((err) => setError(err.error));
  };

  useEffect(() => {
    fetchSession()
      .then((data) => {
        setUserInfo(data);
        setIsAdmin(data.isAdmin);
        setUser(data.username);
      })
      .catch(() => setUser(null));
    fetchCats();
  }, []);

  const handleLogin = (username) => {
    setError("");
    fetchLogin(username)
      .then((data) => {
        setIsAdmin(data.isAdmin);
        setUser(data.username);
        setUserInfo(data);
        setPage("home");
      })
      .catch((err) => setError(err.error));
  };

  const handleRegister = (username) => {
    setError("");
    fetchRegisterUser({ username })
      .then((data) => {
        setMessage(data.message);
        handleLogin(data.data.username);
      })
      .catch((err) => setError(err.error));
  };

  const handleLogout = () => {
    setError("");
    fetchLogout()
      .then((resp) => {
        setMessage(resp.message);
        setUser(null);
        setPage("home");
      })
      .catch((err) => setError(err.error));
  };

  const handleAddCat = (cat) => {
    setError("");
    fetchAddCat(cat)
      .then((resp) => {
        setMessage(resp.message);
        fetchCats();
        setPage("home");
      })
      .catch((err) => setError(err.error));
  };

  const handleUpdateUsers = (userInfo) => {
    setError("");
    fetchUpdateUsersContact(userInfo)
      .then(() => {
        fetchUpdateUser({ catId: cat.id, action: "reserve" })
          .then((resp) => {
            setMessage(resp.message);
            fetchCats();
            fetchSession().then((data) => {
              setUserInfo(data);
            });
            setPage("home");
          })
          .catch((err) => setError(err.error));
      })
      .catch((err) => setError(err.error));
  };

  const handleReserveCat = (catId, cat) => {
    setError("");
    if (isAdmin) {
      setCat(cat);
      fetchUpdateUser({ catId, action: "reserve" })
        .then((resp) => {
          setMessage(resp.message);
          fetchSession().then((data) => {
            setUserInfo(data);
          });
          fetchCats();
        })
        .catch((err) => setError(err.error));
    } else {
      setCat(cat);
      setPage("addReservation");
    }
  };
  const handleReleaseCat = (catId) => {
    setError("");
    fetchUpdateUser({ catId, action: "cancel" })
      .then((resp) => {
        setMessage(resp.message);
        fetchSession().then((data) => {
          setUserInfo(data);
        });
        fetchCats();
      })
      .catch((err) => setError(err.error));
  };
  const handleDeleteCat = (catId) => {
    setError("");
    fetchDeleteCat(catId)
      .then((resp) => {
        fetchCats();
        setMessage(resp.message);
      })
      .catch((err) => setError(err.error));
  };
  const openUpdateCat = (cat) => {
    setCat(cat);
    setPage("updateCat");
  };
  const handleUpdateCat = (cat) => {
    setError("");
    fetchUpdateCatInfo(cat)
      .then((resp) => {
        setMessage(resp.message);
        fetchCats();
        setPage("home");
      })
      .catch((err) => setError(err.error));
  };

  const handleCancelReservation = (catId) => {
    setError("");
    fetchUpdateUser({ catId, action: "cancel" })
      .then((resp) => {
        setMessage(resp.message);
        fetchSession().then((data) => {
          setUserInfo(data);
        });
        fetchCats();
      })
      .catch((err) => setError(err.error));
  };

  return (
    <div className="app">
      <Header
        isLoggedIn={!!user}
        isAdmin={user === "boogy"}
        onLogout={handleLogout}
        onLogin={() => setPage("login")}
        onNavigate={setPage}
      />
      <Status message={error} />
      <Message message={message} setMessage={setMessage} />
      <main>
        {page === "home" && (
          <Cats
            cats={cats}
            isAdmin={isAdmin}
            user={user}
            isLoggedIn={!!user}
            onUpdate={openUpdateCat}
            onDelete={handleDeleteCat}
            onRelease={handleReleaseCat}
            onReserve={handleReserveCat}
            onNavigate={setPage}
          />
        )}
        {page === "login" && (
          <LoginForm onLogin={handleLogin} onNavigate={setPage} />
        )}
        {page === "register" && (
          <Register onRegister={(username) => handleRegister(username)} />
        )}
        {page === "profile" && (
          <MyProfile
            onCancelReservation={handleCancelReservation}
            userProfile={userInfo}
          />
        )}
        {page === "addReservation" && user !== "boogy" && (
          <Reservation onSubmit={handleUpdateUsers} />
        )}
        {page === "addCat" && user === "boogy" && (
          <AddCat onAddCat={handleAddCat} />
        )}
        {page === "updateCat" && user === "boogy" && (
          <UpdateCat cat={cat} onUpateCat={handleUpdateCat} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
