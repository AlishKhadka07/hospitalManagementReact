import React from 'react'
import Layout from '../components/layout/Layout';
import Slider from '../components/Slider'
import SearchDoctor from '../components/SearchDoctor'
import Products from '../components/Products';


function Home() {
  return (
    <div>
   <Layout>
  
      <Slider/>
      <SearchDoctor/>
      <Products/>
  </Layout>
   


        
    </div>
  )
}

export default Home