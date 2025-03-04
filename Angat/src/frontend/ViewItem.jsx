import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatDate, formatTimeDate } from "../helpers/misc";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ViewItem() {
  const [itemType, setItemType] = useState(null);
  const [data, setData] = useState([]);
  const [img, setImage] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const itemType = pathParts[pathParts.length - 2];
    setItemType(itemType);
  }, [location.pathname]);

  useEffect(() => {
    setData(location.state.data);
    setImage(location.state.img);
  }, [])

  return (
    <>
      <div className="w-full lg:w-7/10 px-4 sm:px-16 py-10 mx-auto bg-base-200">
        <img src={img} alt="" />
        <div className="w-full pt-4">
          {
            itemType === "project" ?
              (<>
                <div className="text-4xl">{data.name}</div>
                <div className="text-sm">{`${formatDate(data.start_date)} - ${formatDate(data.end_date)}`}</div>
                <div className="text-sm pt-4">{data.description}</div>
              </>) :
              (
                <>
                <div className="text-4xl">{data.title}</div>
                <div className="text-sm">{`${formatDate(data.updated_at)}`}</div>
                <div className="text-sm pt-4">{data.content}</div>
                </>
              )
          }
        </div>
      </div>
    </>
  );
}

export default ViewItem;
