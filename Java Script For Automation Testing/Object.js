//Write an Object named Books and describe its properties.

// const books ={
//     title:'Why you act the way you do',
//     description: 'Best selling Emotional Inteligence book',
//     numberOfPages:384,
//     isReading:false
// }
// console.log(books.isReading)

//Add toggleReadingStatus method to your books object

const books =
    [
        {
        title:'Why you act the way you do',
        description: 'Best selling Emotional Inteligence book',
        author: 'Tim LaHaye',
        numberOfPages:384,
        isReading:false,
        toggleReadingStatus: function () 
        {
            if(this.isReading===false){
                this.isReading=true
            }else{
                this.isReading=false
            }
        }
        
        }
    ]

    books.toggleReadingStatus()
    console.log(books.isReading)

   





