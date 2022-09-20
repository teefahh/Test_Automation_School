/*const name= 'victory'
const age= 100

if (age>=18 && age <= 63 )
{
    console.log('You are eligible to vote')
}

else if (age>63)
{
    console.log('You are too old to vote')
}
else
{
    console.log('You are too Young to vote')
}
*/



//SWITCH STATEMENT

/*const day = 'MONDAY'

switch (day)
{
    case 'friday':
        console.log('TGIF')
        break
    case 'Saturday':
        console.log('Yeah!! Saturday')
        break
    case 'Sunday':
        console.log('Sunday Time')
        break
    default:
        console.log('GOTO WORK')
}*/



// const notEmpty= []

// notEmpty.push('First Element', 'Second Element', 754, 'Latifat')  //add an array at d end of an element
// notEmpty.push('Pushed Elements')

//     console.log(emptyArray)

// const notEmpty= ['First Element', 'Second Element', 754, 'Latifat']

// notEmpty.shift()      shift : removes d first element of an array while unshift adds elements to d beginning of the array

// console.log(notEmpty)

const notEmpty= ['Jan', 'F', 'M','A','MA','J','JU','AUG','SE','OC','NOV', 'D']
let result = notEmpty.splice(7,12)
console.log(result)
console.log(notEmpty)