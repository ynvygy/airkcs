import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Buffer } from 'buffer';
import { create } from 'ipfs-http-client'
import { ethers } from 'ethers';

const projectId = process.env.REACT_APP_INFURA_API_KEY
const projectSecret = process.env.REACT_APP_INFURA_API_SECRET
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  apiPath: '/api/v0',
  headers: {
    authorization: auth,
  }
})

const ListingsABI = [
  "event ListingCreated(uint256 indexed id, uint256 price, string location, uint256 timestamp)",
  "event ListingRemoved(uint256 indexed id, uint256 timestamp)",
  "event ListingUpdated(uint256 indexed id, uint256 price, string location, uint256 timestamp)",
  "function createListing(string name, uint256 stars, string image, uint256 price, string location, string description)",
  "function getLandlord(uint256 _listingId) view returns (address)",
  "function getListing(uint256 _listingId) view returns (tuple(string name, uint256 stars, string image, uint256 price, string location, string description, address landlord))",
  "function getListings() view returns (tuple(string name, uint256 stars, string image, uint256 price, string location, string description, address landlord)[])",
  "function listings(uint256) view returns (string name, uint256 stars, string image, uint256 price, string location, string description, address landlord)",
  "function removeListing(uint256 _listingId)",
  "function updateListing(uint256 _listingId, string _image, uint256 _price, string _location, string _description)"
]

const contractAddress = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512';
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();
const listingsContract = new ethers.Contract(contractAddress, ListingsABI, signer);

async function onChange(e) {
  const file = e.target.files[0]
  try {
    const added = await client.add(file)
    const url = `https://ipfs.infura.io:5001`
    console.log(url)
  } catch (error) {
    console.log('Error uploading file: ', error)
  }  
}

const NewListing = ({account}) => {
  const [image, setImage] = useState('')
  const [uri, setUri] = useState("")
  const [name, setName] = useState("")
  const [stars, setStars] = useState(0)
  const [price, setPrice] = useState(0)
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")

  const createListing = async () => {
    if (!account) {
      alert("Please connect to metamask");
      return;
      }
      await listingsContract.createListing(name, stars, uri, price, location, description).then(() => alert("success")).catch((error) => alert(error.message))
  };

  const getListings = async () => {
    const listings = await listingsContract.getListings();
    console.log(listings);
  };

  const uploadToIPFS = async (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    if (typeof file !== 'undefined') {
      try {
        const result = await client.add(file)
        console.log(result)
        setImage(`https://ipfs.infura.io/ipfs/${result.path}`)
      } catch (error){
        console.log("ipfs image upload error: ", error)
      }
    }
  }

  return (
    <Form className="m-2">
      <h2 className="d-flex justify-content-center">Create listing</h2>
      <Form.Group className="m-2">
      <Form.Control type="file" name="file" onChange={uploadToIPFS}/>
      </Form.Group>
      <Form.Group className="m-2">
        <label htmlFor="name">Name</label>
        <Form.Control type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="m-2">
        <label htmlFor="stars">Stars</label>
        <Form.Control type="text" name="stars" placeholder="Stars" value={stars} onChange={(e) => setStars(e.target.value)}/>
      </Form.Group>
      <Form.Group className="m-2">
        <label htmlFor="uri">IPFS URI</label>
        <Form.Control type="text" name="uri" placeholder="IPS URI" value={uri} onChange={(e) => setUri(e.target.value)}/>
      </Form.Group>
      <Form.Group className="m-2">
        <label htmlFor="price">Price</label>
        <Form.Control type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
      </Form.Group>
      <Form.Group className="m-2">
        <label htmlFor="location">Location</label>
        <Form.Control type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
      </Form.Group>
      <Form.Group className="m-2">
        <label htmlFor="description">Description</label>
        <Form.Control type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
      </Form.Group>
      <Form.Group className="m-2 mt-4">
        <Button variant="success" onClick={createListing}>Create</Button>
      </Form.Group>
      <Form.Group className="m-2 mt-4">
        <Button variant="success" onClick={getListings}>Get</Button>
      </Form.Group>
    </Form>
  )
}

export default NewListing;