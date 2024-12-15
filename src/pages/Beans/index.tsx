import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { beansSelector } from "../../redux/beans/beansSelector";
import { useEffect, useState } from "react";
import { getBeans } from "../../api/beans";
import { Loader } from "../../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeanCard } from "../../components/BeansCard";
import { Error } from "../../components/Error";
import "./styles.css";

export const BeansPage = () => {
  const dispatch = useAppDispatch();
  const { data, totalPages, isLoading, isError } = useSelector(beansSelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getBeans(page));
  }, [page]);

  const load = () => {
    setPage(page + 1);
  };

  return (
    <div className="beans_container">
      <h1>Explore All Beans ...</h1>
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
            <BeanCard key={item.beanId} data={item} />
          ))}
        </InfiniteScroll>
      )}
      {isError && <Error />}
    </div>
  );
};
