import React from 'react';

interface HeaderProps {
  text : string
classnames : string
}

const Header: React.FC<HeaderProps> = ({text,classnames}) => {
  return (
  <span className={classnames}>{text}</span>
  );
};

export default Header;