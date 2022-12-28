const book = {
    author: 'Shusaku Endo',
    title: 'Silence',
    publicationDate: 1966
};

const movie = {
    title: 'The Silence',
    director: 'Martin Scorsese'
};

const getTitle = (obj) => {
    let {title} = obj;
    console.log(title);
};

getTitle(book);
getTitle(movie);