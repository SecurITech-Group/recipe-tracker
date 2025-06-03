const validItems = [
  "canine meat", "pork", "beef", "wyrdmeat", "gold maggot", "venison", "wyrd venison", "poultry",
  "onion", "parsley", "carrot", "potato", "lettuce", "garlic", "cabbage",
  "blueberry", "tomato", "raspberry", "apple",
  "fish fillet", "crab", "really special herring",
  "butter", "cheese", "egg", "flour", "groats", "honey", "milk", "oats"
];

function populateItemList() {
  const datalist = document.getElementById("item-list");
  validItems.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    datalist.appendChild(option);
  });
}

populateItemList(); 

const categories = {
  "any meat": ["canine meat", "pork", "beef", "wyrdmeat", "gold maggot", "venison", "wyrd venison", "poultry"],
  "any vegetable": ["onion", "parsley", "carrot", "potato", "lettuce", "garlic", "cabbage"],
  "any fruit": ["blueberry", "tomato", "raspberry", "apple"],
  "any seafood": ["fish fillet", "crab", "really special herring"]
};

const recipes = {
    "Apple Fritters": {
        ingredients: {
            flour: 1,
            apple: 1,
            milk: 1
        },
        image: "images/apple-fritters.png"
    },
    "Apple Oatmeal": {
        ingredients: {
            oats: 1,
            honey: 1,
            apple: 1
        },
        image: "images/apple-oatmeal.png"
    },
    "Beef Stew": {
        ingredients: {
            beef: 1,
            carrot: 1,
            potato: 1
        },
        image: "images/beef-stew.png"
    },
    "Beggar's Fare": {
        ingredients: {
            groats: 1,
            oats: 1
        },
        image: "images/beggars-fare.png"
    },
    "Broth": {
        ingredients: {
            "any meat": 1,
            onion: 1,
            carrot: 1
        },
        image: "images/broth.png"
    },
    "Cabbage Rolls": {
        ingredients: {
            "any meat": 1,
            cabbage: 1,
            groats: 1
        },
        image: "images/cabbage-rolls.png"
    },
    "Cheese Ball of Doom": {
        ingredients: {
            cheese: 3
        },
        image: "images/cheese-ball-of-doom.png"
    },
    "Cheese Bun": {
        ingredients: {
            flour: 1,
            cheese: 1
        },
        image: "images/cheese-bun.png"
    },
    "Cheese Pie": {
        ingredients: {
            cheese: 1,
            flour: 1,
            butter: 1
        },
        image: "images/cheese-pie.png"
    },
    "Cooked Fruits": {
        ingredients: {
            "any fruit": 1
        },
        image: "images/cooked-fruits.png"
    },
    "Cooked Meat": {
        ingredients: {
            "any meat": 1
        },
        image: "images/cooked-meat.png"
    },
    "Cooked Seafood": {
        ingredients: {
            "any seafood": 1
        },
        image: "images/cooked-seafood.png"
    },
    "Cooked Vegetable": {
        ingredients: {
            "any vegetable": 1
        },
        image: "images/cooked-vegetable.png"
    },
    "Cottage Pie": {
        ingredients: {
            beef: 1,
            carrot: 1,
            potato: 1
        },
        image: "images/cottage-pie.png"
    },
    "Cough Syrup": {
        ingredients: {
            garlic: 1,
            onion: 1,
            honey: 1
        },
        image: "images/cough-syrup.png"
    },
    "Custard": {
        ingredients: {
            milk: 1,
            egg: 1,
            honey: 1
        },
        image: "images/custard.png"
    },
    "Damn Good Fish": {
        ingredients: {
            "fish fillet": 1,
            honey: 1,
            butter: 1
        },
        image: "images/damn-good-fish.png"
    },
    "Fish Soup": {
        ingredients: {
            "fish fillet": 1,
            onion: 1,
            carrot: 1
        },
        image: "images/fish-soup.png"
    },
    "Fisherman's Breath": {
        ingredients: {
            "fish fillet": 1,
            garlic: 1,
            cabbage: 1
        },
        image: "images/fishermans-breath.png"
    },
    "Fried Cheese": {
        ingredients: {
            cheese: 1,
            flour: 1,
            egg: 1
        },
        image: "images/fried-cheese.png"
    },
    "Fried Fish": {
        ingredients: {
            "fish fillet": 1,
            butter: 1
        },
        image: "images/fried-fish.png"
    },
    "Fried Potatoes and Onions": {
        ingredients: {
            potato: 1,
            onion: 1
        },
        image: "images/fried-potatoes-and-onions.png"
    },
    "Grandma's Powermilk": {
        ingredients: {
            garlic: 1,
            milk: 1,
            honey: 1
        },
        image: "images/grandmas-powermilk.png"
    },
    "Grandma's Secret": {
        ingredients: {
            milk: 1,
            garlic: 1,
            honey: 1
        },
        image: "images/grandmas-secret.png"
    },
    "Hearty Omelet": {
        ingredients: {
            egg: 1,
            "any meat": 1,
            tomato: 1
        },
        image: "images/hearty-omelet.png"
    },
    "Honeyed Apples": {
        ingredients: {
            apple: 1,
            honey: 1
        },
        image: "images/honeyed-apples.png"
    },
    "Hunter's Delicacy": {
        ingredients: {
            venison: 1,
            apple: 1,
            potato: 1
        },
        image: "images/hunters-delicacy.png"
    },
    "Hunter's Stew": {
        ingredients: {
            venison: 1,
            potato: 1,
            garlic: 1
        },
        image: "images/hunters-stew.png"
    },
    "Kamelot's Delicacy": {
        ingredients: {
            venison: 1,
            honey: 1,
            potato: 1
        },
        image: "images/kamelot-delicacy.png"
    },
    "Mashed Potatoes": {
        ingredients: {
            milk: 1,
            potato: 1
        },
        image: "images/mashed-potatoes.png"
    },
    "Mom's Pie": {
        ingredients: {
            flour: 1,
            blueberry: 1,
            egg: 1
        },
        image: "images/moms-pie.png"
    },
    "Noodles": {
        ingredients: {
            flour: 1,
            egg: 1
        },
        image: "images/noodles.png"
    },
    "Oatmeal": {
        ingredients: {
            oats: 1
        },
        image: "images/oatmeal.png"
    },
    "Oatmeal Milk": {
        ingredients: {
            oats: 1,
            milk: 1
        },
        image: "images/oatmeal-milk.png"
    },
    "Onion Bun": {
        ingredients: {
            flour: 1,
            butter: 1,
            onion: 1
        },
        image: "images/onion-bun.png"
    },
    "Pancake": {
        ingredients: {
            flour: 1,
            butter: 1,
            milk: 1
        },
        image: "images/pancake.png"
    },
    "Peasant's Stew": {
        ingredients: {
            groats: 1,
            potato: 1
        },
        image: "images/peasants-stew.png"
    },
    "Pork Aspic": {
        ingredients: {
            "any vegetable": 1,
            pork: 1
        },
        image: "images/pork-aspic.png"
    },
    "Poultry Stew": {
        ingredients: {
            poultry: 1,
            "any vegetable": 2
        },
        image: "images/poultry-stew.png"
    },
    "Roast": {
        ingredients: {
            "any meat": 1,
            butter: 1,
            garlic: 1
        },
        image: "images/roast.png"
    },
    "Scones": {
        ingredients: {
            flour: 1,
            butter: 1,
            honey: 1
        },
        image: "images/scones.png"
    },
    "Scrambled Eggs With Meat": {
        ingredients: {
            egg: 1,
            "any meat": 1
        },
        image: "images/scrambled-eggs-with-meat.png"
    },
    "Scrambled Eggs With Vegetables": {
        ingredients: {
            egg: 1,
            "any vegetable": 1
        },
        image: "images/scrambled-eggs-with-vegetables.png"
    },
    "Sewal's Delight": {
        ingredients: {
            crab: 1,
            "fish fillet": 1,
            raspberry: 1
        },
        image: "images/sewals-delight.png"
    },
    "Shortbread": {
        ingredients: {
            flour: 1,
            butter: 1,
            honey: 1
        },
        image: "images/shortbread.png"
    },
    "Simple Meal": {
        ingredients: {
            groats: 1,
            onion: 1,
            cabbage: 1
        },
        image: "images/simple-meal.png"
    },
    "Sour Herring and Cheese": {
        ingredients: {
            cheese: 1,
            "really special herring": 1
        },
        image: "images/sour-herring-and-cheese.png"
    },
    "Southern Style Crab": {
        ingredients: {
            crab: 1,
            garlic: 1,
            parsley: 1
        },
        image: "images/southern-style-crab.png"
    },
    "The Kraken": {
        ingredients: {
            "fish fillet": 1,
            crab: 1,
            blueberry: 1
        },
        image: "images/the-kraken.png"
    },
    "Venison Stew": {
        ingredients: {
            venison: 1,
            "any vegetable": 2
        },
        image: "images/venison-stew.png"
    },
    "Wyrddeer Stew": {
        ingredients: {
            wyrdVenison: 1,
            potato: 1,
            garlic: 1
        },
        image: "images/wyrddeer-stew.png"
    }
};

let inventory = {};
let learned = new Set();

function resetLearnedRecipes() {
  localStorage.removeItem("learnedRecipes");
  learnedRecipes = {};
  alert("Learned recipes have been reset.");
  location.reload();
}

function saveLearned() {
  localStorage.setItem('learnedRecipes', JSON.stringify([...learned]));
}

function loadLearned() {
  const data = localStorage.getItem('learnedRecipes');
  if (data) learned = new Set(JSON.parse(data));
}

function addItem() {
  const nameInput = document.getElementById("item-name");
  const qtyInput = document.getElementById("item-qty");
  const name = nameInput.value.trim().toLowerCase();
  const qty = parseInt(qtyInput.value);

  if (!validItems.includes(name)) {
    alert(`"${name}" is not a valid ingredient.`);
    return;
  }

  if (isNaN(qty) || qty <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }

  if (inventory.hasOwnProperty(name)) {
    alert(`"${name}" is already in your inventory.`);
    return;
  }

  inventory[name] = qty;

  nameInput.value = "";
  qtyInput.value = "";
  renderInventory();
  renderRecipes();
}

function renderInventory() {
  const ul = document.getElementById('inventory-list');
  ul.innerHTML = '';
  for (const [item, qty] of Object.entries(inventory)) {
    const li = document.createElement('li');
    li.textContent = `${item} x${qty}`;
    ul.appendChild(li);
  }
}

function canMake(recipe) {
  const tempInventory = { ...inventory };

  for (const [ingredient, amount] of Object.entries(recipe.ingredients)) {
    if (categories[ingredient]) {
      let remaining = amount;
      for (const actualItem of categories[ingredient]) {
        const available = tempInventory[actualItem] || 0;
        const used = Math.min(available, remaining);
        tempInventory[actualItem] = available - used;
        remaining -= used;
        if (remaining === 0) break;
      }
      if (remaining > 0) return false;
    } else {
      if ((tempInventory[ingredient] || 0) < amount) return false;
      tempInventory[ingredient] -= amount;
    }
  }
  return true;
}

function renderRecipes() {
    const showUnlearned = document.getElementById('show-unlearned').checked;
    const showAll = document.getElementById('show-all').checked;
    const list = document.getElementById('recipe-list');
    list.innerHTML = '';

    for (const [name, data] of Object.entries(recipes)) {
        const isLearned = learned.has(name);

        if (showUnlearned && isLearned) continue;
        if (!showAll && !canMake(data)) continue;

        const card = document.createElement('div');
        card.className = 'recipe-card';

        const img = document.createElement('img');
        img.src = data.image;
        img.alt = name;
        img.className = 'recipe-image';
        card.appendChild(img);

        const details = document.createElement('div');
        const title = document.createElement('h3');
        title.textContent = name;
        details.appendChild(title);

        const ul = document.createElement('ul');
        for (const [ing, amt] of Object.entries(data.ingredients)) {
            const li = document.createElement('li');
            const icon = document.createElement('img');
            icon.src = `icons/${ing}.png`;
            icon.alt = ing;
            icon.className = 'icon';
            li.appendChild(icon);
            li.append(` ${ing} x${amt}`);
            ul.appendChild(li);
        }

        details.appendChild(ul);

        if (!isLearned) {
            const btn = document.createElement('button');
            btn.textContent = 'Mark as Learned';
            btn.onclick = () => {
                learned.add(name);
                saveLearned();
                renderRecipes();
            };
            details.appendChild(btn);
        }

        card.appendChild(details);
        list.appendChild(card);
    }
}

document.getElementById('show-all').addEventListener('change', renderRecipes);
document.getElementById('show-unlearned').addEventListener('change', renderRecipes);

document.addEventListener('DOMContentLoaded', () => {
  loadLearned();
  renderInventory();
  renderRecipes();
});
