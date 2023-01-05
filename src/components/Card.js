import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/features/cartSlice';

import Button from './Button';

const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      key={product.id}
      className="w-80 mb-8  shadow-lg shadow-black-500/50 rounded-md overflow-hidden "
    >
      <div className="relative h-56 hover:scale-110 transition-all cursor-pointer">
        <img src={product.img} alt={product.name} className="h-full w-full" />
      </div>
      <div className="text-center mb-2  p-5  ">
        <h2 className="text-lg">{product.name}</h2>
      </div>

      <div className="flex items-center justify-between p-8">
        <div className="text-base">
          <p>Price: ${product.price}</p>
        </div>

        <Button
          primary
          onClick={() =>
            dispatch(
              addToCart({
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
              })
            )
          }
        >
          Add To Cart
          <FaShoppingCart className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Card;
