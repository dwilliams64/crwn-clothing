import React from 'react';

// Imports withRouter component from react-router-dom
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

// history and match are props that come from Route component via withRouter(MenuItem)

// linkUrl comes from directory.data so that we can provide the url for our hisotry.push()
const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => (
    // Now we can dynamically pass in the url property as well as our linkUrl property from our data
    // to give dyamic routes.
    <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

        <div 
            className='menu-item__background'
            style={{
    
                backgroundImage: `url(${imageUrl})`
            }}        
        
        ></div>

        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>     
)

// Using withRouter on the MenuItem.

// withRouter will return a more powered up version of our MenuItem component
// with access to the location, history, and match props that we get from our Route component.
export default withRouter(MenuItem);