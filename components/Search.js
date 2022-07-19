const Search = ({ searchQuery, setSearchQuery }) => (
  <input
    value={searchQuery}
    onInput={event => setSearchQuery(event.target.value)}
    id="header-search"
    type="text"
    name="search-bar"
    placeholder="Search"
  />
);

export default Search;