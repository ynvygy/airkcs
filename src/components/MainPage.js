import Search from './Search';
import Offers from './Offers';
import Browse from './Browse';

const MainPage = ({searchQuery, setSearchQuery, handleSearch, dateDifference, setDateDifference}) => {
  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} dateDifference={dateDifference} setDateDifference={setDateDifference}/>
      <Browse />
    </>
  )
}

export default MainPage;