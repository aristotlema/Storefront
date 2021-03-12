import React from 'react';
import ProductList from './ProductList'
import MainNavBar from './MainNavBar';



class App extends React.Component{
render(){
        return(
            <div>
                <MainNavBar />
                <ProductList />
                
            </div>
        ); 
    }
}

export default App;