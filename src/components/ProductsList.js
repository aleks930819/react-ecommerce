import { useGetProductsQuery } from '../store';
import Card from './Card';
import Spinner from './Spinner';

const ProductsList = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <div className="grid mt-12 ml-12 gap-10 sm:grid-cols-3">
      {isLoading ? (
        <Spinner />
      ) : (
        data?.map((product) => <Card key={product.id} product={product} />)
      )}
    </div>
  );
};

export default ProductsList;
