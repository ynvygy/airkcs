import Search from './Search';
import Offers from './Offers';
import Tabs from './Tabs';
import Browse from './Browse';

const MainPage = ({account}) => {
  return (
    <>
      <Tabs />
      <Search/>
      <Offers />
      <Browse />
    </>
  )
}

export default MainPage;