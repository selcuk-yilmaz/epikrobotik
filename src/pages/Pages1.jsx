import React from "react";
import { useUserContext } from "../contexts/UserContextProvider";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
const Pages1 = () => {
  const { users } = useUserContext();
  console.log(users);
  return (
    <>
      <div className=" ">
        <div class="row">
          <div class="col-3">
            <SideBar />
          </div>
          <div class="col-9">
            <div>
              <h3 className="my-3">{users.title}</h3>
              <img className="mb-5" src={users.imageUrl} alt="" />
              <p>{users.desc}</p>
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
