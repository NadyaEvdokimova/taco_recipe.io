import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {
  const taco = req.body.choice
  switch(taco) {
    case "chicken":
      var chickenTaco = JSON.parse(recipeJSON)[0];
      var name = chickenTaco["name"];
      var protein = chickenTaco["ingredients"]["protein"]["name"];
      var proteinPreparation = chickenTaco["ingredients"]["protein"]["preparation"];
      var salsa = chickenTaco["ingredients"]["salsa"]['name'];
      var toppings = chickenTaco["ingredients"]["toppings"];
      var ingredients = {
        name : name,
        protein : protein,
        proteinPreparation : proteinPreparation,
        salsa : salsa,
        toppings : toppings,
      }
      
      break;
    case "beef":
      var beefTaco = JSON.parse(recipeJSON)[1];
      var name = beefTaco["name"];
      var protein = beefTaco["ingredients"]["protein"]["name"];
      var proteinPreparation = beefTaco["ingredients"]["protein"]["preparation"];
      var salsa = beefTaco["ingredients"]["salsa"]['name'];
      var toppings = beefTaco["ingredients"]["toppings"];
      var ingredients = {
        name : name,
        protein : protein,
        proteinPreparation : proteinPreparation,
        salsa : salsa,
        toppings : toppings,
      }
      break;
    case "fish":
      var fishTaco = JSON.parse(recipeJSON)[2];
      var name = fishTaco["name"];
      var protein = fishTaco["ingredients"]["protein"]["name"];
      var proteinPreparation = fishTaco["ingredients"]["protein"]["preparation"];
      var salsa = fishTaco["ingredients"]["salsa"]['name'];
      var toppings = fishTaco["ingredients"]["toppings"];
      var ingredients = {
        name : name,
        protein : protein,
        proteinPreparation : proteinPreparation,
        salsa : salsa,
        toppings : toppings,
      }
      break;
  }
  res.render("index.ejs", {ingredients : ingredients})
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
