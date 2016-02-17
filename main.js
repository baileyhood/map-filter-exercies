///////////Question 1///////////

var total = 0; // 1. empty variable
items.forEach(function(el) { //2. adding each price and putting them in 'total'
  total += el.price;
});
var finalAvg = total/items.length; //3. creating another var called finalAvd, and then averaging (total prices/each number of item)
document.getElementById("answer1").innerHTML = Math.round(finalAvg); //4. Rounding average and adding to 'answer1'div

///////////Question 2///////////

var filterPrice = items.filter(function(el){ //1. filtering out prices between 14 & 18;
  return el.price >= 14 && el.price <= 18;
});

var costArray = []; //2. creating an empty array to put them in
filterPrice.forEach(function(el){ //3. putting filterPrice inside of array
  costArray += "<p>" + "price: " + el.price + " title: " + el.title + "</p>";
});
document.getElementById("answer2").innerHTML = costArray; //4. putting the results on the DOM;

///////////Question 3///////////

var filterGBP = items.filter(function(el){ //1. filtering out currency codes that have 'GBP'
  return el.currency_code === 'GBP';
});
var gbpTitle = filterGBP.map(function(el){ //2. remapping properties into this array called gbpTitle
  return {
    Title: el.title,
    Price: el.price
  };
});
document.getElementById("answer3").innerHTML = gbpTitle[0].Title + " | " +  gbpTitle[0].Price; //3. calling array (that's why use the ''[]''), then calling property ('Title' & 'Price')

///////////Question 4///////////

var filterWood = items.filter(function(el){ //1. filtering out anything not made of 'wood'
  return el.materials.includes("wood");
});
var woodTitle = filterWood.map(function(el){ //2. remapping to add Title and Price properties to 'woodTitle' array
  return {
    Title: el.title,
    Price: el.price
  };
});
var numberOfMaterials = ""; //3. creating empty variable;
 woodTitle.forEach(function(el){ // 4. using forEach to loop through each object of 'woodTitle' to add to 'numberOfMaterials'
  numberOfMaterials += "<p>" + el.Title + " | " +  el.Price + "</p>" ;
});
document.getElementById("answer4").innerHTML = numberOfMaterials; //5. adding to DOM

///////////Question 5///////////

var filterMaterials = items.filter(function(el){ //1. Filtered out anything with materials less than 8
  return el.materials.length >= 8;
});
var mappedMaterials = filterMaterials.map(function(el){ //2. remapped to create array with specified properties
  return {
    Title: el.title,
    Num: el.materials.length,
    Madeof: el.materials,
    Quantity: el.quantity,
    };
});
var eightMore = ""; //3. created empty var
mappedMaterials.forEach(function(el){ //4. looped through "mappedMaterials" w/ forEach to add each property in "eightMore"
  eightMore += "<p>" + el.Title + " | " + el.Num + " | " + el.Madeof + "</p>";
});
document.getElementById("answer5").innerHTML = eightMore; //5. added to DOM

///////////Question 6///////////

var makerArray = items.filter (function (el){ //1. Filtering out all sellers who did not make their items
  return el.who_made === "i_did";
});
document.getElementById("answer6").innerHTML = makerArray.length + " items."; //2. Adding to DOM
