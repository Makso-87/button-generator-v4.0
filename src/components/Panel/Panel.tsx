import React, { ReactNode } from 'react';
import classes from './Panel.module.scss';

type TPanel = {
  name: string;
  children: ReactNode;
};
const Panel = (props: TPanel) => {
  const { name, children } = props;
  return (
    <div className={classes.Panel}>
      <div className={classes.TabBar}>{name}</div>

      <div className={classes.Content}>{children}</div>
    </div>
  );
};

export default Panel;
