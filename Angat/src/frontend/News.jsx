import { useState, useEffect } from 'react'
import './components/header'
import NewsItem from './components/newsitem'
import { useAuth } from '../helpers/AuthContext';
import { Link } from "react-router-dom";
import { useNews, getImage } from '../helpers/dbHelper'
import { formatTimeDate } from '../helpers/misc'

function News() {
    const [count, setCount] = useState(0)
    const { user, userRole, loading } = useAuth();
    const approvedNews = useNews("approved");
    return (
        <>
            <div className="w-full lg:w-7/10 px-4 sm:px-16 py-10 mx-auto bg-base-200">
                <div className="flex flex-row justify-between">
                    <div className="text-3xl font-bold">
                        News
                    </div>
                    <div className='flex gap-2'>
                        {(userRole && (userRole === "admin" || userRole === "user")) && <Link to="/add-content" className='btn btn-primary'>
                            Add
                        </Link>}
                        {(userRole && userRole === "admin") && <Link to="/pending-news" className='btn btn-primary'>
                            Pending
                        </Link>}
                    </div>
                </div>

                <div className="flex flex-col pt-4 gap-4">
                    {approvedNews.length > 0 ? (
                        approvedNews.map((item, index) => (
                            <NewsItem
                                key={item.newsid}
                                title={item.title}
                                date={formatTimeDate(item.updated_at)}
                                description={item.content}
                                img={getImage("projects_news", item.image_filename)}
                            />
                        ))
                    ) : (
                        <NewsItem
                        title='Loading...'
                        date=''
                        description=''/>
                    )}
                </div>

            </div>



        </>
    )
}

export default News
