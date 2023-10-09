import React from 'react';

import { Header } from '../components';
import product9 from '../data/product9.jpg';

const Information = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="About" title="Information" />
    <div className="text-center">
    <img
      className="md:w-96 h-50 "
      src={product9}
      alt=""
    />
    </div>    
  </div>
  )
}

export default Information