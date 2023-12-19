var FoodRatings = function(foods, cuisines, ratings) {
    let foodRating = [];
    for(let i = 0 ; i < foods.length ; i++){
        let data = {};
        data.food = foods[i];
        data.cuisin = cuisines[i];
        data.rating = ratings[i];
        foodRating.push(data);
    }
    return foodRating;
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    let foodRating = this;
    console.log(foodRating);
    for(let data in foodRating){
        if(data.food == food){
            data.rating = newRating;
        }
    }
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    let foodRating = this;
    let arr = [];
    for(let data in foodRating){
        if(data.cuisin == cuisine){
            arr.push([data.food, data.rating]);
        }
    }

    data.sort((a,b)=>{
        if(a[1] == a[b]){
            return a[0].localeCompare(b[0]);
        }
        return a[1] - b[1];
    })

    return data[0][0];
};
let food = new FoodRatings(["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
["korean", "japanese", "japanese", "greek", "japanese", "korean"],
[9, 12, 8, 15, 14, 7]
);

console.log(food);
food.highestRated();