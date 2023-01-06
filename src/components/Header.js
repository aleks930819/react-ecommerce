import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { store } from '../store';
import { getTotals } from '../store/featuers/cartSlice';
import Theme from './Theme';

const Header = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const theme = useSelector((state) => state.theme);

  const navigate = useNavigate();

  const cartNavigateHandler = () => {
    navigate('/cart');
  };

  useEffect(() => {
    store.dispatch(getTotals());
  });

  return (
    <div
      className={
        'bg-zinc-600 text-white pt-6  text-2xl flex   w-full  justify-end   z-10   mb-3.5'
      }
    >
      <div className="mr-5 mb-4 self-end cursor-pointer">
        <Theme />
      </div>
      <div className="cursor-pointer  mb-4 flex flex-col  justify-center mr-10">
        <p className="self-center">{cartTotalQuantity}</p>
        <div>
          <FaShoppingCart onClick={() => cartNavigateHandler()} />
        </div>
      </div>
    </div>
  );
};

export default Header;
