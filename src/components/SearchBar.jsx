import Icon from "./Icon";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <Icon name="search" className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search notes"
      />
      {search && (
        <button
          type="button"
          className="icon-btn search-clear"
          aria-label="Clear search"
          onClick={() => setSearch("")}
        >
          <Icon name="close" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
