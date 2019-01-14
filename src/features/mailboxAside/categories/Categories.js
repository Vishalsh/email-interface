import React from 'react';

import classes from './Categories.module.scss';

const categories = [{
  name: 'Work',
  color: '#1bb394'
}, {
  name: 'Documents',
  color: '#ef5352'
}, {
  name: 'Social',
  color: '#1c84c6'
}, {
  name: 'Advertising',
  color: '#23c6c8'
}, {
  name: 'clients',
  color: '#f8ac59'
}];

const Categories = () => {
  return (
    <ul className={classes.list}>
      {
        categories.map((category) => (
          <li key={category.name} className={classes.listItem}>
            <i className={classes.icon} style={{'background': category.color}} />
            <span>{category.name}</span>
          </li>
        ))
      }
    </ul>
  )
};

export default Categories;
