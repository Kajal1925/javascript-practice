function circleArea(radius){
    if(radius<0){
        console.log("Enter a valid radius");
    }
    let area = 3.14*(radius**2);
    return area;
}
let radius = 12;
console.log("Area of circle =",circleArea(radius));