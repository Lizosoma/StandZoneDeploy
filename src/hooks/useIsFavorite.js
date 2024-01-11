import { useSelector } from 'react-redux';

const useIsFavorite = () => {
  const favorites = useSelector((state) => state.favoriteReducer);

  const isFavorite = (stand) => {
    return Object.keys(favorites).includes(stand.id);
  };

  return {
    isFavorite,
  };
};

export default useIsFavorite;
