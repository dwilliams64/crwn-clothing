import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

// Importing an array of JavaScript objects.
// This wasn't done in the video. It was something I
// came up with.
import sections from '../../data/directory.data.js';
import './directory-menu.styles.scss';

// This component  is a class component because we need to levrage state 
// to pass this info down into our MenuItem component in the form of props.
class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            data: sections
        }
    }

    
    render() {
        // Deconstructing this.state to use the data property
        const {data} = this.state;
       
        return (
            <div className='directory-menu'>

                {/* Looping over the array of objects stored in the data property
                to map them onto the Menu component. */}

                {
                    // The map array method allows us to perform an operation on each
                    // individual array element

                    // This method returns a brand new array

                    // By using the map method on our data property from the state
                    // we can map the property and values that are in our array of objects
                    // to a MenuItem component.

                    // By using the map method to return a MenuItem component we get an array
                    // of MenuItem components that will turn into multiple MenuItem components 
                    // based on the number of objects in our array.

                    // The array is then evaluated by the {} that these comments are surrounded by
                    // and they become the MenuItem components that we see on the page.

                    // Instead of passing something like elm to represent each JavaScript object
                    // into the map() argument and then using key={elm.id} and title={elm.title}
                    // we are using deconstruction in the argument to have direct access to these properties.

                    // Remember each unique component needs a unique key so React can keep track of
                    // each component for change made to that component.

                    // The size property will allow us to pass a custom class into our components.

                    data.map(({id, title, imageUrl, size}) => {                        
                        return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    })  
                    
                }
            </div>
        );
    }
}

export default Directory;