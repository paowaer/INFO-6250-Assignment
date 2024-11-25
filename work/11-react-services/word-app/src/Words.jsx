import "./Words.css";
import Loading from "./Loading";
import WordItem from "./WordItem";

function Words({ words, isWordPending, onDeleteWord }) {
  const SHOW = {
    PENDING: "pending",
    EMPTY: "empty",
    WORD: "word",
  };

  let show;
  if (isWordPending) {
    show = SHOW.PENDING;
  } else if (!Object.keys(words).length) {
    show = SHOW.EMPTY;
  } else {
    show = SHOW.WORD;
  }

  return (
    <div className="content">
      {show === SHOW.PENDING && (
        <Loading className="words__waiting">Loading Word...</Loading>
      )}
      {show === SHOW.EMPTY && <p>No Word yet, add one!</p>}
      {show === SHOW.WORD && (
        <ul className="words">
          {Object.values(words).map((word) => (
            <li className="word" key={word.id}>
              <WordItem word={word} onDeleteWord={onDeleteWord} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Words;
