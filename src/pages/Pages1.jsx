import React from "react";
import { useUserContext } from "../contexts/UserContextProvider";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
const Pages1 = () => {
  const { tasks } = useUserContext();
 
  console.log(tasks.title);
  return (
    <>
      <div className=" ">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div>
              <h3 className="my-3">{tasks.title}</h3>
              <img className="mb-5" src={tasks.imageUrl} alt="" />
              <p>{tasks.desc}</p>
            </div>
            <div>
              <li className="list-group-item">
                <Link to={-1} className="card-link">
                  Go Back
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages1;
