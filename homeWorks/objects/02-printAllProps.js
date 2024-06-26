function solve(params) {
    for (const key in params) {
      console.log(key+':'+params[key]);
    }
}

solve ({
    name: "Sofia",
    population: 1234567,
    country: "Bulgaria",
    postcode: "1000"
});


