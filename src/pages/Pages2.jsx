import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContextProvider";
import SideBar from "../components/SideBar";

const Pages2 = () => {
  const { tasks, setTasks } = useUserContext();
  const navigate = useNavigate();
  const [title, setTitle] = useState(tasks.title);
  const [imageUrl, setImageUrl] = useState(tasks.imageUrl);
  const [desc, setDesc] = useState(tasks.desc);

  const handlesubmit = (e) => {
    e.preventDefault();
    const newform = {
      title: title,
      imageUrl: imageUrl,
      desc: desc,
    };
    setTasks(newform);
    setTitle("");
    setImageUrl("");
    setDesc("");
    navigate("/");
  };
  return (
    <div className="">
      <div className="row">
        <div className="col-3">
          <SideBar fieldset />
        </div>
        <div className="main col-9 my-4">
          <div>
            <h2 style={{marginTop:"55px"}}>Update</h2>

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
