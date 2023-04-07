import { useNavigate } from 'react-router-dom';
import './search.css';

const Search = ({handleSearch}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="search-background">
        <div className='col-md-7 offset-md-2 mx-auto'>
          <div className="text-wrapper" style={{ color: "#fff" }}>
            <h2 style={{ fontSize: "3em", marginBottom: "0", fontWeight: "bold", paddingTop: "10px" }}>Find your next stay</h2>
            <p style={{ fontSize: "1.5em", marginTop: "0.5em", paddingBottom: "30px"}}>
              Search deals on hotels, homes, and much more...
            </p>
          </div>
          <form className="form-inline">
            <div style={{backgroundColor: '#ffb700', borderRadius: '2px', display: 'flex', alignItems: 'center', padding: '5px', height: '6.5vh'}}>
              <div style={{width: '36%', borderRadius: '3px', marginRight: '5px', display: 'flex', whiteSpace: 'nowrap', alignItems: 'center', backgroundColor: 'white'}}>
                <div style={{paddingLeft: '10px'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '30px' }}>
                    <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z" fill="currentColor"/>
                  </svg>
                </div>
                <input type="text" style={{width: '100%', padding: '5px', borderRadius: '3px', marginRight: '5px', height: '5.7vh', border: 'none', outline: 'none', fontSize:"0.9em"}} placeholder="Where are you going?" />
              </div>
              <div style={{width: '29%', padding: '0px', borderRadius: '3px', marginRight: '5px', display: 'flex', whiteSpace: 'nowrap', alignItems: 'center', backgroundColor: 'white'}}>
                <div style={{paddingLeft: '10px'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '30px' }}>
                    <path d="M22.5 13.5v8.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v16.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM7.5 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zM18 6V.75a.75.75 0 0 0-1.5 0V6A.75.75 0 0 0 18 6zM5.095 14.03a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28A1.125 1.125 0 1 0 12 15a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zM12 18a1.125 1.125 0 1 0 0 2.25A1.125 1.125 0 0 0 12 18a.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5z" fill="currentColor"/>
                  </svg>
                </div>
                <input type="text" style={{width: '100%', border: 'none', backgroundColor: 'white', borderRadius: '3px', padding: '5px', height: '5.7vh', fontSize:"0.9em"}} placeholder="Check-in Date — Check-out Date" />
              </div>
              <div style={{width: '29%', padding: '0px', borderRadius: '3px', marginRight: '5px', display: 'flex', whiteSpace: 'nowrap', alignItems: 'center', backgroundColor: 'white'}}>
                <div style={{paddingLeft: '10px'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '30px' }}>
                    <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z" fill="currentColor"/>
                  </svg>
                </div>
                <input type="text" style={{width: '100%', border: 'none', backgroundColor: 'white', borderRadius: '3px', padding: '5px', height: '5.7vh', fontSize:"0.9em"}} placeholder="2 adults - 0 children - 1 room" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '30px' }}>
                  <path d="M18 9.45c0 .2-.078.39-.22.53l-5 5a1.08 1.08 0 0 1-.78.32 1.1 1.1 0 0 1-.78-.32l-5-5a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0L12 13.64l4.72-4.72a.74.74 0 0 1 1.06 0 .73.73 0 0 1 .22.53zm-5.72 4.47zm-.57 0z" fill="currentColor"/>
                </svg>
              </div>
              <button onClick={() => navigate('/listings')} style={{width: '10%', padding: '5px', backgroundColor: '#0071c2', color: 'white', borderRadius: '3px', height: '5.7vh', border: 'none', fontSize: "1.25em"}} onMouseOver={(e) => e.target.style.backgroundColor = '#003580'} onMouseOut={(e) => e.target.style.backgroundColor = '#0071c2'} >Search</button>
            </div>
            <label style={{ display: "flex", alignItems: "center", marginTop: "10px", fontSize: "1em" }}>
              <input type="checkbox" style={{ borderRadius: "2px", marginRight: "8px", fontSize: "0.9em" }} />
              <span>I'm traveling for work</span>
            </label>
          </form>
        </div>
      </div>
    </>
  )
}

export default Search;