import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
//import Carousal from "../components/Carousal";
function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search,setSearch]=useState("");

  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    //console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };
  useEffect(() => {
    loaddata();
  }, []);

  return (<><Navbar />
      <div>
      <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{objectFit:"contain !important"}}
    >
      <div className="carousel-inner" id="carousel">
      <div className='carousel-caption' style={{zIndex:"10"}}>
   <div class="d-flex justify-content-center w-300px">
      <input class="div-control me-2" type="search" placeholder="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}   aria-label="Search"/>
      {/* <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
    </div>
  </div>
        
        <div className="carousel-item active">
          <img
            src="https://media.istockphoto.com/id/1416033500/photo/tasty-hamburger-on-a-dark-background.webp?b=1&s=170667a&w=0&k=20&c=tezxHml8fnB0fTaotUG9kPbrOsY5G7c19NHwuInXHp4="
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
      <div className="container">
        {
          foodCat !== []
          ? foodCat.map((data) => {
              return (<div className="row mb-3"><div key={data._id} className="fs-3 m-3">
                 {data.CategoryName}
              </div>
              <hr />
              {foodItem!==[]? foodItem.filter((item)=>item.CategoryName===data.CategoryName && (item.name.toLowerCase().includes(search.toLowerCase())) ).map(filterItems=>{
                {return (
                <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                   <Card
                   foodItem={filterItems}
                   // foodName={filterItems.name}
                    options={filterItems.options[0]}
                    //imgSrc={filterItems.img}
                   ></Card>
                   
                </div>
                
              )}
              })
              :<div>No Such Data Found</div>}
              </div>);

            })
          : <div>"-----------------"</div>
          }
        
      </div>

      <Footer />
    </>
  );
}
export default Home;
