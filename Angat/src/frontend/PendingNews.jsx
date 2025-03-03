import "./components/header";
import PendingNewsItem from "./components/pendingnewsitem";
import { Link } from "react-router";
import { formatTimeDate } from "../helpers/misc";
import useStore from '../helpers/Store';
import { useState, useEffect } from "react";

function PendingNews() {
  const { news, fetchNews, getImage, subscribeToNews } = useStore();
  const [pendingNews, setPendingNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchNews();
    };
    fetchData();
  }, []);

  useEffect(() => {
    const subscription = subscribeToNews(); // Call subscription function

    return () => {
      subscription.unsubscribe(); // Clean up on unmount
    };
  }, []);

  useEffect(() => {
    setPendingNews(news.filter((item) => item.status === "pending"));
  }, [news]);

  return (
    <>
      <div className="w-full lg:w-7/10 px-4 sm:px-16 py-10 mx-auto bg-base-200">
        <div className="flex flex-row justify-between ">
          <div className="text-3xl font-bold">Pending News</div>
          <div className="flex gap-2">
            <Link to="/news">
              <div className="btn btn-primary">Back</div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col pt-4 gap-4">
          {pendingNews.length > 0 ? (
            pendingNews.map((item, index) => (
              <PendingNewsItem
                key={item.newsid}
                newsid={item.newsid}
                title={item.title}
                date={formatTimeDate(item.created_at)}
                description={item.content}
                img={getImage("projects_news", item.image_filename)}
              />
            ))
          ) : (
            <h2 className="text-2xl font-bold">No news to review.</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default PendingNews;
