import { useParams, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ViewItem() {
  const { name } = useParams(); // Get the dynamic part of the URL
  const query = useQuery(); // Get query parameters

  const proj = {
    name: name,
    img: query.get("img"),
    title: query.get("title"),
    date: query.get("date"),
    description: query.get("description"),
  };
  if (!proj) {
    return <div>Error: No project data found.</div>;
  }

  return (
    <> 
      <div className="w-full lg:w-7/10 px-4 sm:px-16 py-10 mx-auto bg-base-200">
        <img src={proj.img} alt="" />
        <div className="w-full pt-4">
          <div className="text-sm">{proj.date}</div> 
          <div className="text-4xl">{proj.title}</div>
          <div className="text-sm pt-4">{proj.description}</div>
        </div>
      </div>
    </>
  );
}

export default ViewItem;
