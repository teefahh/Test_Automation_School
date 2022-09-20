//TriangleTypes
const side1=5
const side2=5
const side3=7

if (side1==side2 && side2==side3 && side1== side3){
    console.log('This is an Equilateral triangle')
}else if (side1==side2 || side2 == side3 || side1==side3){
    console.log('This is an Isosceles triangle!!!')
}else{
    console.log('This is a Scalene triangle')
}