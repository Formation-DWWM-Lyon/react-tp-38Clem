import React, { Component } from 'react';
import Axios from 'axios';
import Layout from './Layout';
import { ListGroup, Card, CardColumns } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

export default class UserList extends Component {

  state = {
    result: null,
    info: null,
  }

  getRandomUser = () =>
    Axios.get(`https://randomuser.me/api/?results=10`)
      .then((response) => this.setState({ result: response.data.results, info: response.data.info }))

  componentDidMount = () => {
    this.getRandomUser();
  }

  render = () => {
    const { result, info } = this.state;
    console.log('result');
    console.log(result);
    console.log('info');
    console.log(info);
    if (!result) {
      return (
        <div className="text-center">
          <Loader
            type="Puff"
            color="black"
            height={100}
            width={100}
          />
        </div>
      )
    }

    return (
      <Layout>
        <CardColumns className="cardlist">
          {result.map((item, index) =>
            <Card key={index}>
              <Image className="ProfilPic" src={item.picture.large} />
              <Card.Title className="Name">
                {item.name.first} {item.name.last}
              </Card.Title>
              <Card.Body>
                <ListGroup >
                  <Card.Text >{item.gender}</Card.Text>
                  <Card.Text>{item.dob.age}</Card.Text>
                  <Card.Text>{item.location.city}, {item.location.country}</Card.Text>
                </ListGroup>
              </Card.Body>
            </Card>
          )}
        </CardColumns>
        <Button onClick={this.getRandomUser}>Click to get a new list</Button>
      </Layout>

    )
  }

}