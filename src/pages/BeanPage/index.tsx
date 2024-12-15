import { useParams } from "react-router-dom";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { beanSelector } from "../../redux/bean/beanSelector";
import { useEffect } from "react";
import { getBean } from "../../api/bean";
import { Loader } from "../../components/Loader";
import { Error } from "../../components/Error";

export const BeanPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector(beanSelector);

  useEffect(() => {
    dispatch(getBean(id));
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}

      {data && (
        <div
          className="bean_container"
          style={{ background: data.backgroundColor }}
        >
          <img src={data.imageUrl} alt="" />
          <div className="info">
            <h1>{data.flavorName}</h1>
            <h3>{data.description}</h3>
            <p>Ingredients: {data.ingredients.map((item) => item + " , ")}</p>
            <p>{data.glutenFree ? "No gluten" : "With gluten"}</p>
          </div>
        </div>
      )}

      {isError && <Error />}
    </>
  );
};
