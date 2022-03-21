const {
    addNoteHandler,
    getAllNoteHandler,
    getNoteByIdHandler,
    editNoteByHandler,
    deleteNoteByIdHandler,
} = require("./handler");

const routes = [{
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        options: {
            cors: {
                origin: ['*'],
            },
        },
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },

];

module.exports = routes;