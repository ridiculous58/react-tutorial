import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {
    //let {id:id} = useParams()
    let { name } = useParams() //url deki parametrelere  useParams() bu method sayesinde erişebiliyoruz

    const [products, setProducts] = useState({}) // useState parametre olarak il değeri alır

    useEffect(()=>{
        let productService = new ProductService();
        productService.getProductByName().then(result=>setProducts(result.data.data));
    },[]); // [] ikinci parametre değişen state ler oldugund asayfayı yenile demek için kullanılır mesela product nenesi değiştiğinde sayfayı yenile tarzında 

    return (
        <div>
            {name}
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{products.productName}</Card.Header>
                        <Card.Meta>{products.category.categoryName}</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
          </Button>
                            <Button basic color='red'>
                                Decline
          </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
