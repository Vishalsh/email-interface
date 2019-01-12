import React from 'react';

import classes from './Labels.module.scss';

const labels = ['Family', 'Work', 'Home', 'Children', 'Holidays', 'Music', 'Photography', 'Film'];

const Labels = () => {
  return (
    <ul className={classes.list}>
      {
        labels.map((label) => (
          <li key={label} className={classes.listItem}>
            <div className={classes.align}>
              <i className="icon icon-tag"/>
              <span>{label}</span>
            </div>
          </li>
        ))
      }
    </ul>
  )
};

export default Labels;
