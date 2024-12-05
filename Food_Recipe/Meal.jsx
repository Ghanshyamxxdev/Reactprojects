import React, { useEffect, useState } from "react";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area , setArea ] = useState("indian");
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api =
        await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}
`);
      const data = await api.json();
      console.log(data.meals);
      setMealData(data.meals);
    };
    fetchDataFromAPI();
  }, [area]);

  return (<>
  <div className="my-3 " style={{ width: "1000px", margin: "auto" }}>
        <div className="mx-auto text-center">
          <button
            onClick={() => setArea("indian")}
            type="button"
            className="btn btn-outline-primary  mx-3 "
          >
            Indian
          </button>
          <button
                      onClick={() => setArea("Russian")}

            // onClick={() => filterByCategory("Action")}
            type="button"
            className="btn btn-outline-primary mx-3"
          >
            Russian
          </button>
          <button
                      onClick={() => setArea("american")}

            // onClick={() => filterByCategory("Thriller")}
            type="button"
            className="btn btn-outline-info mx-3"
          >
            Canadian
          </button>
          <button
                      onClick={() => setArea("American")}

            // onClick={() => filterByCategory("Animation")}
            type="button"
            class="btn btn-outline-info mx-3"
          >
            American
          </button>
          <button
                      onClick={() => setArea("Thai")}
            // onClick={() => filterByCategory("Horror")}
            type="button"
            className="btn btn-outline-warning mx-3"
          >
            Thai
          </button>
          <button
                      onClick={() => setArea("British")}
            // onClick={() => filterByCategory("Drama")}
            type="button"
            className="btn btn-outline-info mx-3"
          >
            British
          </button>
          
        </div>
      </div>
    <div style={{display:"flex", 
        justifyContent:"center",
        alignItems:"center",
        flexWrap:"wrap",
        margin:'auto',
        width:"1000px",
        marginTop:"20px",
        gap:"20px",
        padding:"30px",
        border:"2px solid blue",
        backgroundColor: "pink",
        borderRadius:"10px",
        color:"black",
        fontSize:"20px",
        

    }}>
      {mealData.map((data) => (
        <div key={data.idmeal} style={{textAlign:"center"}}>
          <div>
            <img
              src={data.strMealThumb}
              alt=""
              style={{
                width: "220px",
                borderRadius: "10px",
                border: "2px solid blue",
              }}
            />
          </div>
          <h3>{data.strMeal}</h3>
        </div>
      ))}
    </div>
    </>
  );
};

export default Meal;
