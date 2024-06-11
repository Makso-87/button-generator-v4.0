import React from 'react';
import classes from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={classes.Layout}>
      <h1>Генератор кнопок</h1>

      <div className={classes.MainContainer}>
        <div className={classes.LeftSide}>
          <h2>Настройки параметров кнопки</h2>
        </div>

        <div className={classes.RightSide}>
          <div className={classes.PreviewContainer}>
            <h2>Предварительный просмотр</h2>
          </div>

          <div className={classes.ResultCodeContainer}>
            <h2>Код для вставки</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
