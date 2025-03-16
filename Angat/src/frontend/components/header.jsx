import angatLogo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import  Profile  from "./Profile";
import { useAuth } from '../../helpers/AuthContext'; 
import { useLocation } from "react-router-dom";
import { useState } from "react";
import useStore from "../../helpers/Store";

function Header() {
  const location =  useLocation();
  const { user, userRole, loading } = useAuth();
  const userName =  user?.user_metadata?.username ?? "";
  const [searchQuery, setSearchQuery] = useState('');
  const {projects, news, getImage} = useStore();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length > 0) {
        const filteredResults = [...projects, ...news]
            .filter((item) => 
                item.status === "approved" &&
            (
              (item.title && item.title.toLowerCase().includes(query)) || 
              (item.content && item.content.toLowerCase().includes(query)) ||
              (item.name && item.name.toLowerCase().includes(query)) ||
              (item.description && item.description.toLowerCase().includes(query))
            )
                
            )
            .map((item) => ({
                id: item.newsid || item.projectid,
                name: item.name || item.title,  // Use project name or news title
                description: item.description || item.content,
                img: getImage("projects_news", item.image_filename),
                rowData: item,
                type: projects.includes(item) ? "Project" : "News", // Identify source type
            }));

        setSearchResults(filteredResults);
    } else {
        setSearchResults([]); // Clear search results when query is empty
    }
};

  return (
    <>
      <div class="navbar px-6 bg-primary shadow-sm sticky -top-0 z-50  ">
        <div class="navbar-start w-10/12 lg:w-1/2">
          {/* Dropdown for mobile */}
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-b-lg z-1 mt-6 w-88 p-2 shadow"
            >
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/linkages">
                  Linkages
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/news">
                  News
                </Link>
              </li>
            </ul>
          </div>
          {/* Angat Logo */}
          <div
            className="rounded-lg bg-base-100 p-1
            ml-4">
            <Link to="/" className="btn btn-ghost text-xl h-16 w-16 p-0">
              <img src={angatLogo} alt="Angat Logo" />
            </Link>
          </div>
          {/* Search Bar */}
          <div className="ml-4 max-w-50">
          <label className="input hidden sm:flex">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input 
              type="search"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}/>
          </label>
          {/* Search Result */}
          {searchQuery.length > 0 ?
          <>
          <div className="bg-white hidden sm:flex absolute z-2 p-3 max-w-1/2 rounded-lg">
          <div className="flex flex-col space-y-1">
            {/* {searchQuery} */}
            {searchResults.length > 0 ? (
              searchResults.map((item) => (
                <Link
                  to={`/view-item/${item.type.toLowerCase()}/${item.id}`}
                  state={{ data: item.rowData, img: item.img }}
                  onClick={() => setSearchQuery('')}
                  >
                 <div class>
                  <div className="font-bold text-md text-nowrap truncate">{item.name}</div>
                  <div className="text-xs truncate max-h-24 overflow-hidden text-ellipsis">{item.description}</div>
                  <div className="text-xs">{item.type}</div>
                 </div>
                </ Link>
            ))
            ) : (
              <div className="text-sm">No results found</div>
            )}
          </div>
          </div>
          </>:<></>}
          </div>
          {/* Search End */}
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 text-base-100 font-bold gap-2
          [&_li>a:hover]:bg-secondary
          [&_li>a]:px-4">
            <li>
              <Link to="/" className={`px-4 ${location.pathname === "/" ? "bg-secondary" : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`px-4 ${location.pathname === "/about" ? "bg-secondary" : ""}`}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/linkages" className={`px-4 ${location.pathname === "/linkages" ? "bg-secondary" : ""}`}>
                Linkages
              </Link>
            </li>
            <li>
              <Link to="/projects" className={`px-4 ${location.pathname === "/projects" ? "bg-secondary" : ""}`}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/news" className={`px-4 ${location.pathname === "/news" ? "bg-secondary" : ""}`}>
                News
              </Link>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          {user ? (<Profile username={userName} userRole={userRole}/>) : (<div className="flex gap-2 
          [&_a:hover]:bg-accent [&_a:hover]:text-secondary [&_a:hover]:border-secondary
          [&_a]:bg-secondary [&_a]:text-base-100 [&_a]:border-accent [&_a]:border-3">
            <Link
              to="/register"
              className="btn hover:bg-accent hover:text-secondary hover:border-secondary
              bg-secondary text-base-100 border-accent border-3"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="btn hover:bg-accent hover:text-secondary hover:border-secondary
              bg-secondary text-base-100 border-accent border-3"
            >
              Sign In
            </Link>
          </div>)}

        </div>
      </div>
    </>
  );
}

export default Header;
