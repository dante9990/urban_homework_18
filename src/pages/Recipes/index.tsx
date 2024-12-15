import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import './styles.css'
import { RecipesSelector } from '../../redux/recipes/recipesSelector';
import { useEffect, useState } from 'react';
import { getRecipes } from '../../api/recipes';
import { Loader } from '../../components/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { RecipeCard } from '../../components/RecipeCard';
import { Error } from '../../components/Error';

export const RecipesPage = () => {
    const dispatch = useAppDispatch();
    const { isLoading, data, totalPages, isError } = useSelector(RecipesSelector);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      dispatch(getRecipes(page));
    }, [page]);
  
    const load = () => {
      setPage(page + 1);
    };
  
    return (
      <div className="recipes_container">
        <h1>Recipes ...</h1>
        {isLoading && data.length === 0 ? (
          <Loader />
        ) : (
          <InfiniteScroll
            next={load}
            dataLength={data.length}
            loader={<Loader />}
            hasMore={page < totalPages}
          >
            {data.map((item) => (
              <RecipeCard key={item.recipeId} data={item} />
            ))}
          </InfiniteScroll>
        )}
        {isError && <Error />}
      </div>
    );
  };