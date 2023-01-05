import { useEffect } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { store } from '../store';
import { getTotals } from '../store/features/cartSlice';

const Header = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const cartNavigateHandler = () => {
    navigate('/cart');
  };

  useEffect(() => {
    store.dispatch(getTotals());
  });

  return (
    <div className="bg-zinc-900 text-white pt-6  text-2xl flex   w-full  justify-end content-end  z-10   mb-3.5">
      <div className="cursor-pointer  mb-4 flex flex-col gap-2 justify-center mr-10">
        <p className="ml-2">{cartTotalQuantity}</p>
        <div>
          <FaShoppingBasket onClick={() => cartNavigateHandler()} />
        </div>
      </div>
    </div>
  );
};

export default Header;
