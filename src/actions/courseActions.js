"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var CourseApi = require('../api/courseApi');

var CourseActions = {
  deleteCourse: function(id) {
    CourseApi.deleteCourse(id);
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_COURSE,
      courses: CourseApi.getAllCourses()
    });
  },

  addCourse: function() {

  },

  updateCourse: function() {

  }
};

module.exports = CourseActions;