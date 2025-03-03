import { Link } from "react-router";

function Project(props) {
  return (
    <>
      <Link
        to={`/view-item/project/${encodeURIComponent(props.name)}?img=${encodeURIComponent(props.img)}&title=${encodeURIComponent(props.title)}&date=${encodeURIComponent(props.date)}&description=${encodeURIComponent(props.description)}`}
        className="transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 flex flex-col md:flex-row gap-4 w-full items-center bg-base-300 p-3 rounded-lg"
      >
        <img
          className="object-cover w-full h-full   min-h-0 min-w-0 rounded-lg
                        max-h-64 md:max-h-32
                        max-w-none md:max-w-48"
          src={props.img}
          alt=""
        />
        <div className="flex flex-col w-full">
          <div className="font-bold text-2xl">{props.title}</div>
          <div className="font-bold text-sm">{props.date}</div>
          <div className="text-sm overflow-hidden text-ellipsis line-clamp-3 h-16">
            {props.description}
          </div>
        </div>
      </Link>
    </>
  );
}

export default Project;
