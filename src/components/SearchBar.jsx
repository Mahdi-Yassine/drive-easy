function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="search"
        placeholder="Search by brand..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search cars"
      />
    </div>
  );
}

export default SearchBar;
