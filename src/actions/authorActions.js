"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
  createAuthor: function(author) {
    var newAuthor = AuthorApi.saveAuthor(author);

    //Hey dispatcher, go tell all the stores that an author was just created.
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  },

  updateAuthor: function(author) {
    var updatedAuthor = AuthorApi.saveAuthor(author);
    CourseApi.updateAuthorInfo(author);
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    });
  },

  deleteAuthor: function(id) {
    AuthorApi.deleteAuthor(id);
    CourseApi.deleteCoursesForAuthor(id);
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    });
  }
};

module.exports = AuthorActions;