import React, { Component } from 'react';
import Axios from 'axios';
import Layout from './Layout';
import { ListGroup, Card, CardColumns } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Profile } from '.';
import { Redirect } from 'react-router-dom';

export default class UserList extends Component {

  state = {
    result: null,
    info: null,
    index: null,
    redirect: false,
  }

  fetchProfile = () => {
    console.log('Le click marche');
    // const { result, info } = this.state;


    this.setState({redirect:true})
    return <Redirect to={'./profile/'} {...this.state}/>
  };

  getRandomUser = () =>
    Axios.get(`https://randomuser.me/api/?results=10`)
      .then((response) => this.setState({ result: response.data.results, info: response.data.info }))

  componentDidMount = () => {
    this.getRandomUser();
  }

  render = () => {
    const { result, info, redirect } = this.state;
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
        <CardColumns>
          {result.map((item, index) =>
            <Card key={index} >
              <section className="text-center">
                <Image className="card-img-top, rounded-lg" src={item.picture.medium} />
                <Card.Title className="Name">
                  {item.name.first} {item.name.last}
                </Card.Title>
                <Button onClick={this.fetchProfile}>See Profile</Button>
              </section>
              <Card.Body>
                <ListGroup >
                  <ListGroup.Item >{item.gender}</ListGroup.Item>
                  <ListGroup.Item>{item.dob.age}</ListGroup.Item>
                  <ListGroup.Item>{item.location.city}, {item.location.country}</ListGroup.Item>
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