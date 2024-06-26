import React from 'react';
import classes from './Layout.module.scss';
import SettingsBlock from '../SettingsBlock/SettingsBlock';
import ResultCodeArea from '../ResultCodeArea/ResultCodeArea';
import PreviewArea from '../PreviewArea/PreviewArea';

const Layout = () => {
  return (
    <div className={classes.Layout}>
      <h1>Генератор кнопок</h1>

      <div className={classes.MainContainer}>
        <div className={classes.LeftSide}>
          <h2>Настройки параметров кнопки</h2>
          <SettingsBlock />
        </div>

        <div className={classes.RightSide}>
          <div className={classes.PreviewContainer}>
            <h2>Предварительный просмотр</h2>
            <PreviewArea />
          </div>

          <div className={classes.ResultCodeContainer}>
            <h2>Код для вставки</h2>
            <ResultCodeArea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
