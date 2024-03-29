import axios from 'axios';
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { fetchProducts } from './Store/Slice/GetProducts';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const { products, status } = useSelector((state) => state.productsReducer)
  const dispactch = useDispatch()

  // console.log("dispactch", dispactch);
  // const [products, setProducts] = useState([]);

  // all fetch products request
  
  useEffect(() => {
    dispactch(fetchProducts());
  }, [])


  // const fetch = async () => {
  //   const response = await axios.get("https://fakestoreapi.com/products")
  //   const data = response.data
  //   setProducts(data)
  // }

  return (
    <>
      <div className="container cardB d-flex flex-wrap gap-5 align-center justify-content-center my-5">
        {
          products.map(({ title, description, image }, idx) => {
            return (
              <Card key={idx} style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ height: '20rem' }} src={image} />
                <Card.Body>
                  <Card.Title className="clamp-1">{title}</Card.Title>
                  <Card.Text className="clamp-3">{description}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            )
          })
        }

      </div>
    </>
  )
}

export default App
