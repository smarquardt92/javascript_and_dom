// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select(".form-control");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
//   console.log(tableData);

  var filteredData = tableData.filter(table => table.datetime === inputValue);
  
  console.log(filteredData);

  var dates = filteredData.map(table => table.datetime);
  var cities = filteredData.map(table => table.city);
  var states = filteredData.map(table => table.state);
  var countries = filteredData.map(table => table.country);
  var shapes = filteredData.map(table => table.shape);
  var comments = filteredData.map(table => table.comments);


  

  dates.forEach(function(date){
      d3.select("#date")
        .append("dt").text(date)
    })

  cities.forEach(function(city){
      d3.select("#city")
        .append("dt").text(city)
    })
    
  states.forEach(function(state){
      d3.select("#state")
        .append("dt").text(state)
    })
 
  countries.forEach(function(country){
      d3.select("#country")
        .append("dt").text(country)
    })

  shapes.forEach(function(shape){
      d3.select("#shape")
      .append("dt").text(shape)
    })

  comments.forEach(function(comment){
      d3.select("#comments")
      .append("dt").text(comment)
  })

});


