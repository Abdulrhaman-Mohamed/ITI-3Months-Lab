//console.log(new URLSearchParams(location.href).entries())
console.log(location)
var searchParams = new URLSearchParams(location.search);
searchParams.forEach((value, key) => {
    document.write(`<span>${key} </span> <p>${value}</p> `)
  });