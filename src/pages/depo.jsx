 <div>{info?.map((film)=>{
          return (
          
            <div className="card" style="width:400px">
              {/* <img
                className="card-img-top"
                src={film.i.imageUrl}
                alt="Card image"
                style="width:100%"
              /> */}
              <div className="card-body">
                <h4 className="card-title">{film.l}</h4>
                <p className="card-text">{film.s}</p>
                <p className="card-text">{film.q}</p>
                <p className="card-text">{film.rank}</p>
              </div>
            </div>
          );
         
        })
          }

        </div>
        {/* // <div className="container ">
        //   <div class="row">
        //     <div class="col-2">
        //       <SideBar />
        //     </div>
        //     {info.map((inf) => { */}

             
        //       // const {
        //       //   id,
        //       //   l,
        //       //   q,
        //       //   qid,
        //       //   i,
        //       //   s,
        //       // rank,
        //       //   v,
        //       //                } = inf;
        //       // <div class="col-10">
        //       //   <div className="main">
        //       //     <div className="card name">
        //       //       <img
        //       //         src={i.imageUrl}
        //       //         className="card-img-top"
        //       //         style={{ width: 200 }}
        //       //         alt={l}
        //       //       />
        //       //       <h1>{l}</h1>
        //       //     </div>
        //       //     {/* <div className="card email">
        //       //       <img src={emailsvg} style={{ width: 25 }} alt="" />
        //       //       <h4>{email}</h4>
        //       //     </div> */}
        //       //     {/* <div className="card phone">
        //       //       <img src={phonesvg} style={{ width: 50 }} alt="" />
        //       //       <h4>{phone}</h4>
        //       //     </div> */}
        //       //     <div className="card location">
        //       //       {/* <img src={locationsvg} style={{ width: 50 }} alt="" /> */}
        //       //       <h4>{s}</h4>
        //       //     </div>
        //       //     <h5>{v}</h5>
        //       //     <h5>{rank}</h5>
        //       //   </div>
        //       //   {/* <button className="btn btn-primary mb-5" onClick={handleClick}>
        //       //     Random User
        //       //   </button> */}
        //       // </div>;
        //     })}
        //   </div>
        //   <li className="list-group-item">
        //     <Link to={-1} className="card-link">
        //       Go Back
        //     </Link>
        //   </li>
        // </div>
      )}