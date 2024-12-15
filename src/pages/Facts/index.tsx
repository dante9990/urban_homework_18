import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import './styles.css'
import { useEffect, useState } from 'react';
import { FactsSelector } from '../../redux/facts/factsSelector';
import { getFacts } from '../../api/facts';
import { Loader } from '../../components/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FactCard } from '../../components/FactCard';
import { Error } from '../../components/Error';

export const FactsPage = () => {
    const dispatch = useAppDispatch();
    const { data, totalPages, isLoading, isError } = useSelector(FactsSelector);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      dispatch(getFacts(page));
    }, [page]);
  
    const load = () => {
      setPage(page + 1);
    };
    return (
      <div className="facts_container">
        <h1>Facts ...</h1>
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
              <FactCard key={`fact_item_${item.factId}`} data={item} />
            ))}
          </InfiniteScroll>
        )}
        {isError && <Error />}
      </div>
    );
}