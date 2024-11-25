function WordItem({ word, onDeleteWord }) {
  const isDoneClass = word.done ? "text--complete" : "";
  return (
    <>
      <span data-id={word.id} className={`word__text ${isDoneClass}`}>
        {word.task}
      </span>

      <button
        data-id={word.id}
        className="word__delete"
        onClick={(e) => {
          const id = e.target.dataset.id;
          onDeleteWord(id);
        }}
      >
        &#10060;
      </button>
    </>
  );
}

export default WordItem;
