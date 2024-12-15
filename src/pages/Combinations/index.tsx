import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import "./styles.css";
import { combinationsSelector } from "../../redux/combinations/combinationsSelector";
import { useEffect, useState } from "react";
import { getCombinations } from "../../api/combinations";
import { Loader } from "../../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { Error } from "../../components/Error";

export const CombinationsPage = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, totalPages, isError } =
    useSelector(combinationsSelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCombinations(page));
  }, [page]);

  const load = () => {
    setPage(page + 1);
  };
  return (
    <div className="combinations_container">
      <h1>Explore Combinations ...</h1>
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
            <div
              key={item.combinationId}
              className="item"
            >
              <h3>{item.name}</h3>
              <p>{item.tag.map((item) => item + " ")}</p>
            </div>
          ))}
        </InfiniteScroll>
      )}
      {isError && <Error />}
    </div>
  );
};
