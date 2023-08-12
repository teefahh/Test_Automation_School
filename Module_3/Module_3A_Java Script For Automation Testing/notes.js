function triangleTypes(opposite,adjacent,hypotenus)
{
    if (opposite == adjacent && adjacent==hypotenus)
    {
        console.log('This is an Equilateral triangle')
    }else if (opposite== adjacent || adjacent==hypotenus || opposite== hypotenus)
    {
        console.log('This is an Isosceles triangle!')
    }else
    {
        console.log('This is a Scalene triangle')
    }
} 
triangleTypes(1,6,2);



function calculateAreaOfRectangle(length, width)
{
    const product = length*width; 

    console.log(product);                 
}
console.log(calculateAreaOfRectangle(2,2)); 