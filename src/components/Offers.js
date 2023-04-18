import Plane from '../images/plane.jpeg';
import Girl from '../images/girl.jpeg';

const Offers = () => {
  return (
    <div className='col-md-7 offset-md-2 mx-auto'>
      <div style={{ 
        border: "1px solid #e8e8e8",
        borderRadius: "2px",
        padding: "15px",
        paddingBottom: "0px",
        textAlign: "left",
        fontSize: "14px",
        marginTop: "50px",
        marginBottom: "10px",
        display: 'flex', 
        whiteSpace: 'nowrap', 
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '30px' }}>
          <path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z" fill="#a6612f"/>
        </svg>
        <p><strong>Coronavirus (COVID-19) support</strong></p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '30px', marginLeft: "770px" }}>
          <path d="M18 9.45c0 .2-.078.39-.22.53l-5 5a1.08 1.08 0 0 1-.78.32 1.1 1.1 0 0 1-.78-.32l-5-5a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0L12 13.64l4.72-4.72a.74.74 0 0 1 1.06 0 .73.73 0 0 1 .22.53zm-5.72 4.47zm-.57 0z" fill="currentColor"/>
        </svg>
      </div>
      <div style={{ textAlign: "left", marginTop: "40px"}}>
        <h4> Offers</h4>
        <p style={{marginBottom: "0px" }}>Promotions, deals, and special offers for you</p>
      </div>

      <div style={{ 
        display: "flex",
        justifyContent: "space-between"
      }}>
        <div style={{ 
          border: "1px solid #e8e8e8",
          borderRadius: "5px",
          padding: "10px",
          width: "48%",
          boxShadow: "50 50 5px rgba(0,0,5,0.5)"
        }}>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <div style={{ flex: "70%", textAlign: "left", margin: "10px" }}>
              <h3 style={{ fontSize: "1em", fontWeight: "bold", marginBottom: "10px" }}>Fly away to your dream vacation</h3>
              <p style={{ fontSize: "1em", marginBottom: "10px" }}>Get inspired – compare and book flights with<br/>flexibility</p>
              <button style={{ backgroundColor: "#0071c2", color: "white", padding: "10px", fontSize: "0.8em", border: 'none' }}>Search for flights</button>
            </div>
            <div style={{ flex: "30%" }}>
              <img src={Plane} alt="Plane" style={{ width: '130px', height: 'auto' }} />
            </div>
          </div>
        </div>
        <div style={{ 
          border: "1px solid #e8e8e8",
          borderRadius: "5px",
          padding: "10px",
          width: "48%",
          backgroundImage: `url(${Girl})`, 
          backgroundSize: 'cover',
          boxShadow: "50 50 5px rgba(0,0,5,0.5)"
        }}>
           <div style={{ display: "flex", marginTop: "10px" }}>
            <div style={{ flex: "70%", textAlign: "left", margin: "10px" }}>
              <h3 style={{ fontSize: "1em", fontWeight: "bold", marginBottom: "10px", color: "white"}}>Escape for a while</h3>
              <p style={{ fontSize: "1em", marginBottom: "10px", color: "white" }}>Enjoy the freedom of a monthly stay on<br/>Booking.com</p>
              <button style={{ backgroundColor: "#0071c2", color: "white", padding: "10px", borderRadius: "5px", fontSize: "0.8em", border: 'none' }}>Discover monthly stays</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;