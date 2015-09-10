"use strict";

var React = require('react');
var Router = require('react-router');
var CourseStore = require('../../stores/courseStore');
var CourseList = require('./courseList');
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');
var Link = Router.Link;

var CoursePage = React.createClass({
  getInitialState: function() {
    return {
      courses: CourseStore.getAllCourses()
    };
  },

  deleteCourse: function(id, event) {
    event.preventDefault();
    CourseActions.deleteCourse(id);
    toastr.success('Course Deleted');
  },

  componentWillMount: function() {
    CourseStore.addChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ courses: CourseStore.getAllCourses() });
  },

  render: function() {
    return (
      <div>
        <h1>Courses</h1>
        <Link to="addCourse" className="btn btn-default">Add Course</Link>
        <CourseList courses={this.state.courses}
                    deleteCourse={this.deleteCourse} />
      </div>
    );
  }
});

module.exports = CoursePage;