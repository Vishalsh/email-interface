import React from 'react';

import InputWithLabel from 'components/inputWithLabel/InputWithLabel'
import Button from 'components/button/Button'
import classes from './SearchInput.module.scss';

const SearchInput = () => {
  return (
    <div className="flex middle-xs">
      <div className={`${classes.inputWithLabelContainer} col-sm-8 col-md-9`}>
        <InputWithLabel label={''}
                        onChange={() => {
                        }}
                        value={''}
                        placeholder="Search email"
                        className={classes.inputWithLabel}/>
      </div>
      <Button type="primary" className="col-sm-4 col-md-3">
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
