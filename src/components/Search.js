import './search.css';
const Search = () => {
  return (
    <>
      <div className="search-background">
        <div className='col-md-7 offset-md-2 mx-auto'>
          <div className="text-wrapper" style={{ color: "#fff" }}>
            <h2 style={{ fontSize: "3em", marginBottom: "0", fontWeight: "bold" }}>Find your next stay</h2>
            <p style={{ fontSize: "1.5em", marginTop: "0.5em", paddingBottom: "50px"}}>
              Search deals on hotels, homes, and much more...
            </p>
          </div>
          <form className="form-inline">
            <div style={{backgroundColor: '#ffb700', borderRadius: '5px', display: 'flex', alignItems: 'center', padding: '3px', height: '6.5vh'}}>
              <input type="text" style={{width: '36%', padding: '5px', borderRadius: '5px', marginRight: '5px', height: '5.7vh'}} placeholder="Where are you going?" />
              <div style={{width: '29%', padding: '0px', borderRadius: '5px', marginRight: '5px'}}>
                <input type="text" style={{width: '100%', border: 'none', backgroundColor: 'white', borderRadius: '5px', padding: '5px', height: '5.7vh'}} placeholder="Check-in Date- Check-out Date" />
              </div>
              <div style={{width: '29%', padding: '0px', borderRadius: '5px', marginRight: '5px'}}>
                <input type="text" style={{width: '100%', border: 'none', backgroundColor: 'white', borderRadius: '5px', padding: '5px', height: '5.7vh'}} placeholder="2 adults - 0 children - 1 room" />
              </div>
              <button style={{width: '10%', padding: '5px', backgroundColor: '#006ce4', color: 'white', borderRadius: '5px', height: '5.7vh'}}>Search</button>
            </div>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" style={{ borderRadius: "2px", marginRight: "8px" }} />
              <span>I'm traveling for work</span>
            </label>
          </form>
        </div>
      </div>
    </>
  )
}

export default Search;