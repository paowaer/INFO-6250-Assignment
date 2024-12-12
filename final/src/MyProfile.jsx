import "./MyProfile.css";

function MyProfile({ userProfile, onCancelReservation }) {
  const { username, email, phone, address, reservations } = userProfile;

  return (
    <div className="profile">
      <h2>My Profile</h2>
      <div className="profile-info">
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </div>

      <h3>My Reservations</h3>
      {reservations?.length > 0 ? (
        <ul className="reservations">
          {reservations.map((reservation) => (
            <li key={reservation.catId} className="reservation-item">
              <p>
                <strong>Cat ID:</strong> {reservation.catId}
              </p>
              <p>
                <strong>Reserved By:</strong>{" "}
                {reservation.adopterInfo?.username}
              </p>
              <button
                onClick={() => onCancelReservation(reservation.catId)}
                className="cancel-btn"
              >
                Cancel Reservation
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no reservations yet.</p>
      )}
    </div>
  );
}

export default MyProfile;
