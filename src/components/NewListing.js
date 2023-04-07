import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const NewListing = ({account}) => {
  console.log(account)
  const [image, setImage] = useState('')
  const [uri, setUri] = useState("")
  const [price, setPrice] = useState(0)
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")

  const createListing = async () => {
    if (!account) {
      alert("Please connect to metamask");
      return;
      }
      await account.createListing(uri, price, location, description).then(() => alert("success")).catch((error) => alert(error.message))
  };

  return (
    <Form className="m-2">
      <h2 className="d-flex justify-content-center">Create listing</h2>
      <Form.Group className="m-2">
      <Form.Control type="file" name="file"/>
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
    </Form>
  )
}

export default NewListing;