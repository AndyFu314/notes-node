const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const nameOptions = {
    describe: 'Name of note',
    demand: true,
    alias: 'n'
};
const jobOptions = {
    describe: 'Job of note.',
    demand: true,
    alias: 'j'
}

const argv = yargs
    .command('add', 'Add a new note.', {
        name: nameOptions,
        job: jobOptions
    })
    .command('list', 'List all notes.')
    .command('read', 'Read a note.', {
        name: nameOptions
    })
    .command('remove', 'Remove the note.', {
        name: nameOptions
    })
    .command('update', 'Update the note.', {
        name: nameOptions,
        job: jobOptions
    })
    .help('h')
    .argv; 
var command = argv._[0];

if (command === 'add'){
    var note = notes.addNote(argv.name, argv.job);
    if(!_.isUndefined(note)){
        console.log('Note added.');
        notes.logNote(note);
    }else{
        console.log('Added fail, the name may duplicate.');
    }
}else if (command === 'list'){
    var allNotes = notes.getAll();
    debugger;
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}else if (command === 'read'){
    var note = notes.readNote(argv.name);
    if (note){
        console.log('Note found.');
        notes.logNote(note);
    }else{
        console.log('Note not found.');
    }
}else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.name);
    var message = noteRemoved ? 'Note was removed.' : 'Note not found';
    console.log(message);
}else if (command === 'update'){
    var noteUpdated = notes.updateNote(argv.name, argv.job);
    if (noteUpdated){
        console.log('Note was updated.');
        notes.logNote(noteUpdated);
    }else{
        console.log('Note not found.');
    }
}else{
    console.log('Command not recognized.');
}