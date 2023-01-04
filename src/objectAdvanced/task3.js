const book = {
    author: 'Shusaku Endo',
    name: 'Silence',
    publicationDate: 1966
};

const movie = {
    title: 'The Silence',
    director: 'Martin Scorsese',
    releaseDate: 2016
};

const getAllFields = (objectA, objectB) => {
    const object = {...objectA, ...objectB};
    return object;
};

console.log(getAllFields(book, movie));