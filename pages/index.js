import React, { Component } from 'react'
import Layout from '../components/MyLayout.js'
import Head from 'next/head'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

class Home extends Component {
  render() {
    return (
      <Layout>
        <div>
          <div className='container mt-3'>
            {/* <button className='btn btn-success'>Test</button> */}
            <Button variant='contained' color='secondary' >
              halo
            </Button>
            <input
  accept="pdf"
  style={{ display: 'none' }}
  id="raised-button-file"
  multiple
  type="file"
/>
<label htmlFor="raised-button-file">
  <Button variant="raised" component="span">
    Upload
  </Button>
</label> 
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home