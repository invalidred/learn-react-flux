"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var CourseApi = require('../api/courseApi');

var CourseActions = {
  deleteCourse: function(id) {
    CourseApi.deleteCourse(id);
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_COURSE,
      id: id
    });
  },

  addCourse: function(course) {
    var newCourse = CourseApi.saveCourse(course);
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_COURSE,
      course: newCourse
    });
  },

  updateCourse: function(course) {
    var updatedCourse = CourseApi.updateCourse(course);
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_COURSE,
      course: updatedCourse
    });
  }
};

module.exports = CourseActions;