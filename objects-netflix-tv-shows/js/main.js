//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class MakeNetflixTvShows{

    constructor(title, genre, rating, numOfEp){
        this.title = title
        this.genre = genre
        this.rating = rating
        this.numOfEp = numOfEp
    }

    addTolist(){
        alert('Added to list')
    }
    play(){
        alert('show starting')
    }
    stop(){
        alert('show stoping')
    }
}

let  areYouAfriedOfTheDark = new MakeNetflixTvShows('Are you afried of the dark', 'Horror', '4.5', '94' )


