import React from 'react'
import { Layout } from '.'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Layout>
        <h1>Mon super réseau social</h1>
        <Button>
          <Link to={`/userlist`}>
          Go to Users List
          </Link>
          </Button>
      </Layout>
    </div>)

}

export default Home