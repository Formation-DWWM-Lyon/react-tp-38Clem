import React, { Component } from 'react';
import Axios from 'axios';
import Layout from './Layout';

export default class UserList extends Component {

  state = {
    user: null
  }

  getRandomUser = () =>
  Axios.get(`https://randomuser.me/api/`)
  .then((user)=>{console.log(user);
  })

  render = () => {
    return (
      <Layout>
        <div>UserList Component</div>
      </Layout>
      
      ) 
  }
  
}