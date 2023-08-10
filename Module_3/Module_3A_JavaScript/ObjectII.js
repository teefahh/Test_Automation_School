//My Library with a for Loop.

const books = 
[
    {

    title:'Why you act the way you do',
        description: 'Best selling Emotional Inteligence book',
        author: 'Tim LaHaye',
        numberOfPages:384,
        isReading:false,
        

    },

    {
        title:'Georgeous Lie',
        description: 'Best selling women motivational book',
        author: 'Martha Mcphee',
        numberOfPages:225,
        isReading:false,
    },
    {
        title:'Himself',
        description: 'A Gothic Mystery book',
        author: 'Jess Kidd',
        numberOfPages:400,
        isReading:true,
    },
    {title:'The winemaker\'s wife',
    description: 'An Historican Fiction book',
    author: 'Kristein Harmel',
    numberOfPages:400,
    isReading:true,
    },

]
let readingBooks = []
function displayReadingStatus(){
    for(i=0; i<books.length; i++){
        if (books[i].isReading==true){
            readingBooks.push(books[i].title)
        }
        
    }
    console.log('The following books are being read:\n' + readingBooks.toString().replace(',' , '\n'))
}
    displayReadingStatus()