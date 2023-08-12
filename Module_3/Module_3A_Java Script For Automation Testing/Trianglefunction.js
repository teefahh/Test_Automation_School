//Triangles Classification If else IF statement

function triangleTypes(opposite, adjacent, hypotenus){
    
    if (opposite==adjacent && adjacent==hypotenus && hypotenus==adjacent)
    {
        console.log('This is an Equilateral triangle')
    }else if (opposite==adjacent || adjacent==opposite || adjacent==hypotenus){
        console.log('This is an Isoceles triangle!!')
    }else{
        console.log('This is a Scalene triangle')
    }
}
triangleTypes(2,10,3);