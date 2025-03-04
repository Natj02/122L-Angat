import { Link } from "react-router-dom";

function LandingCard(props) {
  return (
    <>
      <Link
        to={`/view-item/project/${props.id}`}
        state={{ data: props.rowData, img: props.img }}
        className="max-h-80 cursor-pointer flex items-center justify-end transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 w-full flex-col md:max-w-1/4 bg-base-300 rounded"
      ><>
          {props.img ? 
          <img
            className="object-cover w-full h-full min-h-0 min-w-0 max-h-40 rounded-t"
            src={props.img} 
            alt=""
          />:
            <></>
            // <div className="flex items-center justify-center object-cover w-full h-full min-h-0 min-w-0 max-h-40 rounded-t border-b-1 ">
            //   <h1 className="font-bold text-2xl text-gray-400">No Image</h1>
            // </div>
          }
          <div className="flex flex-col p-4">
            <div className="font-bold text-lg md:text-xl overflow-hidden text-ellipsis line-clamp-3">
              {props.title}
            </div>
            <div className="font-bold text-sm mt-2">{props.date}</div>
          </div>
          </>
      </Link>
    </>
  );
}

export default LandingCard;
