import React, { Component } from 'react'
import Layout from '../components/MyLayout.js'
import Head from 'next/head'

class Home extends Component {
  render() {
    return (
      <Layout>
        <div>
          <div className='container mt-3'>
            <button className='btn btn-success'>Test</button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home