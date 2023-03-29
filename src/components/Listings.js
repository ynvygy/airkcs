
const Listings = ({account}) => {
  const getListings = async () => {
    if (!account) {
      alert("Please connect to metamask");
      return;
      }
      await account.getListings().then(() => alert("success")).catch((error) => alert(error.message))
  };


  return (
    <div>Cards</div>

  )
}

export default Listings;