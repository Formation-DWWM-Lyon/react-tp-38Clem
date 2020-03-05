import React, { Component } from 'react';
import Axios from 'axios';
import Layout from './Layout';
import { ListGroup } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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
        <ListGroup>
          {result.map((item, index) =>
            <ListGroup.Item key={index}>
              {item.name.title} {item.name.first} {item.name.last}
              <Button>
            <Link to={`/profile/${info.seed}`}>
                See Profile
            </Link>
              </Button>
            </ListGroup.Item>
          )}
        </ListGroup>
        <Button onClick={this.getRandomUser}>Click to get a new list</Button>
      </Layout>

    )
  }

}