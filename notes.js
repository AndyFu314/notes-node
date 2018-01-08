console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note: ', `${title}, ${body}`);
};

var getAll = () => {
    console.log('Getting all notes.');
};

var readNote = (title) => {
    console.log('Reading note of title: ', title);
};

var removeNote = (title) => {
    console.log('Removing note of title: ', title);
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};