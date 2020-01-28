import React from 'react';
import './menu-item.styles.scss';

// We are using deconstruction in our function argument so we have
// direct access to the props properties.

// Instead of writing props in the argument and then writing
// props.title for the <h1> we can just use title.
const MenuItem = ({title, imageUrl, size}) => (

        // The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. 
        // This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security 
        // holesReact's style propetry takes.

        // Read the following link for more details:

        // https://reactjs.org/docs/dom-elements.html#style
     
    <div        
        style={{
                // Property is camel cased.
                // We have to pass in the url value as a string in order for it to work
                // example of this in https://reactjs.org/docs/dom-elements.html#style     
                backgroundImage: `url(${imageUrl})`
            }}        
        
        // We normally pass in a string value into our className property.
        // Since we need to leverage the use of JavaScript so we can pass in
        // our custom size class we can pass in a JavaScript expression and use
        // string interpolation to evaluate both classes as a string.
        
        // Note: For the MenuItems that do not have the size property from our data file
        // they will return undefined for the size property and the style will not be applied.

        className={`menu-item ${size}`}>

        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div> 

    // What we have doen with `url(${imageUrl})` and ${size} has allowed us to dynamically style our components.
)

export default MenuItem;