import Hotels from '../images/hotels.jpeg';
import Apartments from '../images/apartments.jpeg';
import Resorts from '../images/resorts.jpeg';
import Villas from '../images/villas.jpeg';

const Browse = () => {
  return (
    <div className='col-md-7 offset-md-2 mx-auto'>
      <div style={{ textAlign: "left" }}>
        <h4>Browse by property type</h4>
      </div>
      <div style={{ 
        display: "flex",
        justifyContent: "space-between"
      }}>
        <div style={{ 
          border: "1px solid #e8e8e8",
          borderRadius: "8px",
          padding: "0px",
          width: "24%",
          backgroundImage: `url(${Hotels})`, 
          backgroundSize: 'cover',
          height: "250px"
        }}>
        </div>
        <div style={{ 
          border: "1px solid #e8e8e8",
          borderRadius: "8px",
          padding: "0px",
          width: "24%",
          backgroundImage: `url(${Apartments})`, 
          backgroundSize: 'cover',
          height: "250px"
        }}>
        </div>
        <div style={{ 
          border: "1px solid #e8e8e8",
          borderRadius: "8px",
          padding: "0px",
          width: "24%",
          backgroundImage: `url(${Resorts})`, 
          backgroundSize: 'cover',
          height: "250px"
        }}>
        </div>
        <div style={{ 
          border: "1px solid #e8e8e8",
          borderRadius: "8px",
          padding: "0px",
          width: "24%",
          backgroundImage: `url(${Villas})`, 
          backgroundSize: 'cover',
          height: "250px"
        }}>
        </div>
      </div>
    </div>
  );
};

export default Browse;