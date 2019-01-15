import React from 'react';

import classes from './Categories.module.scss';

const categories = [{
  name: 'work',
}, {
  name: 'documents',
}, {
  name: 'social',
}, {
  name: 'advertising',
}, {
  name: 'clients',
}];

const Categories = () => {
  return (
    <ul className={classes.list}>
      {
        categories.map((category) => (
          <li key={category.name} className={classes.listItem}>
            <i className={`${classes.icon} ${classes[category.name]}`}/>
            <span className={classes.name}>{category.name}</span>
          </li>
        ))
      }
    </ul>
  )
};

export default Categories;
