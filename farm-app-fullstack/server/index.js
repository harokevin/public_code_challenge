const express = require('express');

let app = express();

const farm_data = require("../farm_data.json");

//Set up serving FE
app.use(express.static(__dirname + '/../client/dist'));

app.use(function(req, res, next){
	res.set({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': '*'
	});
	next();
});

app.get('/farms', function (req, res) {
  let farms = [];

  // By Name
  if (req && req.query && req.query.name) {
    const givenFarms = req.query.name.split(",").map(f=>f.toLowerCase());
    for (const farm in farm_data) {
      const farmName = farm_data[farm].name.toLowerCase();
      if (givenFarms.includes(farmName)) {
        farms.push(farm_data[farm]);
      } 
    }
  }

  // By Revenue
  if (req && req.query && req.query.revenue) {
    if (!farms.length && typeof req.query.name === "undefined") {
      for (const farm in farm_data) {
        farms.push(farm_data[farm]);
      }
    }
    if (req.query.revenue.toLocaleString() === "asc") {
      farms = farms.sort((a,b) => {
        return a.revenue - b.revenue;
      });
    } else {
      // desc - descending
      farms = farms.sort((a,b) => {
        return b.revenue - a.revenue;
      });
    }
  }

  res.send({farms});
});

let port = 8000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

// API Tests

// Should return a farm by name
// get("http://localhost:8000/farms?name=Stardew Valley&revenue=desc");

// Should return multiple farms in descending order
// get("http://localhost:8000/farms?name=Green Acres,Animal Farm,McDonald&revenue=desc");

// Should return multiple farms in ascending order
// get("http://localhost:8000/farms?name=Green Acres,Animal Farm,McDonald&revenue=asc");

// Should return all farms in descending order
// get("http://localhost:8000/farms?revenue=desc");

// Should return all farms in ascending order
// get("http://localhost:8000/farms?revenue=asc");

// Should return nothing
// get("http://localhost:8000/farms?name=Old McDonald");
// get("http://localhost:8000/farms?name=Schrute Beets");
// get("http://localhost:8000/farms?name=Hog Monkey Farms");
// get("http://localhost:8000/farms?name=Ba Sing Se Farm Co-op");
// get("http://localhost:8000/farms?name=Bike Farm");


