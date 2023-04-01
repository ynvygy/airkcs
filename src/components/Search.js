import './search.css';
const Search = () => {
  return (
    <form className="form-inline">
      <div style={{backgroundColor: '#ffb700', borderRadius: '5px', display: 'flex', alignItems: 'center', padding: '3px'}}>
        <input type="text" style={{width: '35%', padding: '5px', borderRadius: '5px', marginRight: '5px'}} placeholder="Where are you going?" />
        <div style={{width: '25%', padding: '0px', borderRadius: '5px', marginRight: '5px'}}>
          <input type="text" style={{width: '100%', border: 'none', backgroundColor: 'white', borderRadius: '5px', padding: '5px'}} placeholder="Check-in - Check-out" />
        </div>
        <div style={{width: '25%', padding: '0px', borderRadius: '5px', marginRight: '5px'}}>
          <input type="text" style={{width: '100%', border: 'none', backgroundColor: 'white', borderRadius: '5px', padding: '5px'}} placeholder="2 guests" />
        </div>
        <button style={{width: '15%', padding: '5px', backgroundColor: '#006ce4', color: 'white', borderRadius: '5px'}}>Search</button>
      </div>
      <label style={{ display: "flex", alignItems: "center" }}>
        <input type="checkbox" style={{ borderRadius: "2px", marginRight: "8px" }} />
        <span>I'm traveling for work</span>
      </label>
    </form>
  )
}

export default Search;