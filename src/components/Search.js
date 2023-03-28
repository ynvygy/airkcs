const Search = () => {
  return (
    <form className="form-inline">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Where are you going?"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            Search
          </button>
        </div>
      </div>
      <p>checkboxes</p>
    </form>
  )
}

export default Search;