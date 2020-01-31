import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import sections from '../../data/directory.data.js';
import './directory-menu.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            data: sections
        }
    }
    
    render() {
       
        const {data} = this.state;
       
        return (
            <div className='directory-menu'>
                { /* Before spread operator

                    data.map(({id, title, imageUrl, size}) => {                        
                        return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    })  

                    /* After spread operator. */

                    /* The spread operator allows use to set the rest of the props on our component
                        without typing in each prop one by one.

                        This can save on space and makes for much cleaner code when have to many props.

                        The ...otherSectoinProps will populate the other props we didn't manually deconstruct (like id to be used in key)
                        and place them as props using the property from our object as the prop and the value as the prop value.

                        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

                    */

                    data.map(({id, ...otherSectionProps}) => {
                        return <MenuItem key={id} {...otherSectionProps} />
                    })


                } 
                
            </div>
        );
    }
}

export default Directory;