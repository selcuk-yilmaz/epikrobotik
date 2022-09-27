import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContextProvider";
import SideBar from "../components/SideBar";

const Pages2 = () => {
  const { users, setUsers,tasks,setTasks} = useUserContext();
  const navigate = useNavigate();
  const [title, setTitle] = useState(users.title)
  const [imageUrl, setImageUrl] = useState(users.imageUrl);
  const [desc, setDesc] = useState(users.desc)

  const handlesubmit = (e) => {
    e.preventDefault();
    const newform = {
      title: title,
      imageUrl: imageUrl,
      desc: desc,
    };
    setTasks([...tasks, newform]);
    setUsers({
    title: title,
    imageUrl:imageUrl,
    desc:desc,
    } 
    );
    setTitle("");
    setImageUrl("");
    setDesc("");
    navigate("/");
  };
  return (
    <div className="">
      <div class="row">
        <div class="col-3">
          <SideBar fieldset />
        </div>
        <div class="col-9 my-4">
          <div>
            <h2>Update</h2>

            <form onSubmit={handlesubmit}>
              <fieldset>
                <div className="mb-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    id="task"
                    className="form-control"
                    placeholder="Add your task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    imageUrl
                  </label>
                  <input
                    type="text"
                    id="date"
                    className="form-control"
                    placeholder="Add your date"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    Description
                  </label>
                  <textarea
                    rows="10"
                    type="text"
                    id="date"
                    className="form-control"
                    placeholder="Add your date"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </fieldset>
            </form>

            <li className="list-group-item">
              <Link to={-1} className="card-link">
                Go Back
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages2;
