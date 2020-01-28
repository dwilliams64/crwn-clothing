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
                {
                    data.map(({id, title, imageUrl, size}) => {                        
                        return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    })  
                    
                }
            </div>
        );
    }
}

export default Directory;