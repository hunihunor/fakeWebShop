import React, { useContext, useState } from "react";
import { ApiContext } from "../../contexts/ApiContext";

function TermekUrlap() {
  const [adat, setAdat] = useState({
    title: "",
    price: "100",
    category: "",
    description: "",
    image: "",
  });
  const {postAdat} = useContext(ApiContext)
  //output  
  //  {
  //     id:1,
  //     title:'...',
  //     price:'...',
  //     category:'...',
  //     description:'...',
  //     image:'...'
  // }

  function kuldesKezeles(event) {
    event.preventDefault();
    console.log(adat);
    postAdat('/products', adat)
  }
  function valtozasKezeles(event){
    const sv = {...adat}
                sv[event.target.id] = event.target.value
                setAdat({...sv})
  }

  return (
    <div>
      <form onSubmit={kuldesKezeles}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Termék neve
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="title help"
            value={adat.title}
            onChange={valtozasKezeles}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TermekUrlap;
