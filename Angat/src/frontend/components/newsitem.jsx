import { Link } from "react-router";

function NewsItem(props) {
  return (
    <>
      <Link
        to={`/view-item/news/${encodeURIComponent(props.name)}?img=${encodeURIComponent(props.img)}&title=${encodeURIComponent(props.title)}&date=${encodeURIComponent(props.date)}&description=${encodeURIComponent(props.description)}`}
        className="transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 flex flex-row gap-4 w-full max-h-32 bg-base-300 p-3 rounded-lg"
      >
        <img
          className="object-cover w-full h-full min-h-0 min-w-0 rounded-lg
                        max-h-24 
                        max-w-24"
          src={props.img}
          alt=""
        />
        <div className="flex flex-col w-full justify-center">
          <div
            className="font-bold text-lg md:text-2xl overflow-hidden text-ellipsis line-clamp-2 md:line-clamp-2 
                            max-h-18
                            "
          >
            {props.title}
          </div>
          <div className="font-bold text-sm">{props.date}</div>
        </div>
      </Link>
    </>
  );
}

export default NewsItem;
