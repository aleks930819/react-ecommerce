import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { FaShoppingBasket, FaSun, FaMoon } from 'react-icons/fa';
import styles from '../index.css';

import { useEffect } from 'react';
import { set } from '../store/featuers/themeReducer';
const Theme = ({ className }) => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    dispatch(set(next));
  };

  const icon = theme === 'light' ? <FaSun /> : <FaMoon />;
  return (
    <div
      className={cn(
        className,
        styles.root,
        theme === 'dark' ? styles.dark : styles.light
      )}
    >
      <div onClick={handleChange}>{icon}</div>
    </div>
  );
};

export default Theme;
