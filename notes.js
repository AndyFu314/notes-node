const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (name, job) => {
    var notes = fetchNotes();
    var note = {
        name,
        job
    };

    var duplicateNotes = notes.filter((note) => note.name === name);
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var readNote = (name) => {
    var notes = fetchNotes();
    var note = notes.filter((n) => n.name === name)[0];
    return note;
};

var removeNote = (name) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.name !== name);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var updateNote = (name, job) => {
    var notes = fetchNotes();

    if (notes.filter(n => n.name === name)[0]){
        notes.filter(n => n.name === name)[0].job = job;
        saveNotes(notes);
        return readNote(name);
    }else{
        return false;
    }
    
}

var logNote = (note) => {
    console.log('---');
    console.log("Name: ", note.name);
    console.log(`Job: ${note.job}`);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    updateNote,
    logNote
};