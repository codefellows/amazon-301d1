import React from 'react';

export default props => {
  return props.condition ? props.children : null;
};
