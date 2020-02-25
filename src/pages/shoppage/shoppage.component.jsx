import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collectionpage';

import CollectoinsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ match }) => {
    console.log(match)
    return(
    <div className='shop-page'>
        <Route path={`${match.path }`} component={ CollectoinsOverview } />

        {/* 
            match.path is a property on the match object that we get from 
            the Route component. 

            the .path property will be the path passed down from the parent component that is
            wrapped inside of the Route component. In this case match.path will resolve to 
            /shop which is the value of the prop path from the Route inside of App.js (path='/shop').

            We could have just hard coded /shop but by using match.path we can dynamically get the 
            path which makes our code a bit more flexiable. 
            
            If we wanted to pass in a different path for another component we wouldn't have to change this
            code. 

            We can pass in different paths from the parent component's route without changing this code
            if the path where to change.

            :collectionId will allow us to match the collection id that will get from the match object.

            collection id will be a property inside of the params object nested inside of the match object. 

            :collectionId can be any name as in we could have used catergoryId instead if we wanted to. Since
            this relates to our collections we are using collection for name sake.

            We can now pass path={`${match.path}/:collectionId`} to our CollectionPage.
        
        */}
        <Route path={`${match.path}/:collectionId`} component={ CollectionPage } />
    </div>
)};

export default ShopPage;