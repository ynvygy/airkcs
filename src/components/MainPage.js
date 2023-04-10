import Search from './Search';
import Offers from './Offers';
import Tabs from './Tabs';
import Browse from './Browse';

const MainPage = ({searchQuery, handleSearch}) => {
  return (
    <>
      <Tabs />
      <Search searchQuery={searchQuery} handleSearch={handleSearch}/>
      <Offers />
      <Browse />
    </>
  )
}

export default MainPage;