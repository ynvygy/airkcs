import Search from './Search';
import Offers from './Offers';
import Browse from './Browse';

const MainPage = ({searchQuery, setSearchQuery, handleSearch}) => {
  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch}/>
      <Browse />
    </>
  )
}

export default MainPage;