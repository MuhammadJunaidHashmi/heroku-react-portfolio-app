import React from 'react';

import Heads from './Heads';
import Gal from './Gal';

const Home = () => {
    return ( 
        <div>

            <Heads/>
      <h2 className="container page-top" style={{marginTop: 100,marginBottom: 50}}>
      Projects
      </h2>
      <Gal/>
        </div>
     );
}
 
export default Home;