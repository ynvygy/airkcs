import Search from './Search';
import Offers from './Offers';
import Browse from './Browse';

const MainPage = ({searchQuery, handleSearch}) => {
  return (
    <>
      <Search searchQuery={searchQuery} handleSearch={handleSearch}/>
      <Browse />
    </>
  )
}

export default MainPage;