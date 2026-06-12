function Toolbar({ tags, activeTag, sortAsc, onTagChange, onSortToggle }) {
  return (
    <div className="toolbar">
      {tags.map(tag => (
        <button key={tag} onClick={() => onTagChange(tag)}
          className={activeTag === tag ? "active" : ""}>
          {tag}
        </button>
      ))}
      <button onClick={onSortToggle}>
        Price: {sortAsc ? "Low → High" : "High → Low"}
      </button>
    </div>
  );
}
export default Toolbar;