import SideBar from "../components/SideBar";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";

import Card from "./Card";
const Pages3 = () => {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);
  // const url = "https://randomuser.me/api/";

  const pulls = async () => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-news",
      params: { tconst: "tt0944947", limit: "25" },
      headers: {
        "X-RapidAPI-Key": "1efcfbc006msh574ea19274a731cp1e2f44jsn7e3d0f7a6156",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setInfo(response.data.items);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        return <h1>{error.message}</h1>;
      });
  };
  useEffect(() => {
    pulls();
  }, []);

  // const handleClick = () => {
  //   pulls();
  // };
  console.log(info);

  return (
    <div>
      {loading ? (
        <main>
          <Loading />
        </main>
      ) : (
        <>
          <div className=" ">
            <div class="row">
              <div class="col-3">
                <SideBar />
              </div>
              <div class="container my-5 col-9">
                {info?.map((film) => (
                  <Card key={film.id} {...film} />
                ))}
              </div>{" "}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Pages3;
