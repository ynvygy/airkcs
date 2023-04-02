import Plane from '../images/plane.jpeg';
import Girl from '../images/girl.jpeg';

const Offers = () => {
  return (
    <div className='col-md-7 offset-md-2 mx-auto'>
      <div style={{ 
        border: "1px solid #e8e8e8",
        borderRadius: "5px",
        padding: "25px",
        textAlign: "left",
        fontSize: "14px",
        marginTop: "50px",
        marginBottom: "10px"
      }}>
        Get the advice you need. Check the latest COVID-19 restrictions before you travel. <a href="#" style={{ color: "#0077cc", textDecoration: "none", borderBottom: "none" }}>Learn more</a>
      </div>
      <div style={{ textAlign: "left" }}>
        <h4> Offers</h4>
        <p>Promotions, deals, and special offers for you</p>
      </div>

      <div style={{ 
        display: "flex",
        justifyContent: "space-between"
      }}>
        <div style={{ 
          border: "1px solid #e8e8e8",
          borderRadius: "5px",
          padding: "10px",
          width: "48%"
        }}>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "70%", textAlign: "left" }}>
              <h3 style={{ fontSize: "1em", fontWeight: "bold", marginBottom: "10px" }}>Fly away to your dream vacation</h3>
              <p style={{ fontSize: "0.7em", marginBottom: "10px" }}>Get inspired – compare and book flights with<br/>flexibility</p>
              <button style={{ backgroundColor: "#006ce4", color: "white", padding: "10px", borderRadius: "5px", fontSize: "0.8em" }}>Search for flights</button>
            </div>
            <div style={{ flex: "30%" }}>
              <img src={Plane} alt="Plane" style={{ width: '150px', height: 'auto' }} />
            </div>
          </div>
        </div>
        <div style={{ 
          border: "1px solid #e8e8e8",
          borderRadius: "8px",
          padding: "10px",
          width: "48%",
          backgroundImage: `url(${Girl})`, 
          backgroundSize: 'cover' 
        }}>
           <div style={{ display: "flex" }}>
            <div style={{ flex: "70%", textAlign: "left" }}>
              <h3 style={{ fontSize: "1em", fontWeight: "bold", marginBottom: "10px" }}>Escape for a while</h3>
              <p style={{ fontSize: "0.7em", marginBottom: "10px" }}>Enjoy the freedom of a monthly stay on<br/>Booking.com</p>
              <button style={{ backgroundColor: "#006ce4", color: "white", padding: "10px", borderRadius: "5px", fontSize: "0.8em" }}>Discover monthly stays</button>
            </div>
            <div style={{ flex: "30%" }}>
              <div style={{ flex: "70%", textAlign: "left" }}>
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Offers;