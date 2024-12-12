import "./Cats.css";

function Cats({
  cats,
  user,
  isAdmin,
  isLoggedIn,
  onUpdate,
  onDelete,
  onRelease,
  onReserve,
  onNavigate,
}) {
  return (
    <div className="cats-container">
      <h2 className="cats-title">Available Cats</h2>
      <div className="cats-greeting">
        {isLoggedIn && user && <span>Hello, {user}! </span>}
      </div>
      <ul className="grid">
        {cats.map((cat) => (
          <li key={cat.id} className="cat-card">
            <h3 className="cat-name">{cat.catName}</h3>
            <img className="cat-image" src={cat.imageUrl} alt={cat.catName} />
            <p className="cat-info">Age: {cat.age}</p>
            <p className="cat-info">Breed: {cat.breed}</p>
            <p className="cat-info">Description: {cat.description}</p>

            {isLoggedIn ? (
              isAdmin ? (
                <>
                  <div className="admin-controls">
                    <button
                      className="btn-update"
                      onClick={() => onUpdate(cat)}
                    >
                      Update
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => onDelete(cat.id)}
                    >
                      Delete
                    </button>
                  </div>
                  {cat.isReserved ? (
                    <button
                      className="btn-release"
                      onClick={() => onRelease(cat.id)}
                    >
                      Release
                    </button>
                  ) : (
                    <span>is awaiting</span>
                  )}
                </>
              ) : cat.isReserved ? (
                <span className="reserved-label">Reserved</span>
              ) : (
                <button
                  className="btn-reserve"
                  onClick={() => onReserve(cat.id, cat)}
                >
                  Reserve
                </button>
              )
            ) : (
              <button className="btn-login" onClick={() => onNavigate("login")}>
                Reserve
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cats;
