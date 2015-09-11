"use strict";

var React = require('react');
var CourseForm = require('./courseForm');
var CourseStore = require('../../stores/courseStore');

var ManageCourse = React.createClass({

  getInitialState: function() {
    return {
      course: {
        id: '',
        title: '',
        watchHref: '',
        author: {
          id: '',
          name: ''
        },
        length: '',
        category: ''
      },
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() {
    var courseid = this.props.params.id;
    if (courseid) {
      this.setState({ course: CourseStore.getCourseById(courseid) });
    }
  },

  onChange: function() {

  },

  onSave: function() {
    if (!dirty) {
      return;
    }
  },

  render: function() {
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm
          onChange={this.onChange}
          onSave={this.onSave}
          course={this.state.course}
          errors={this.state.errors} />
      </div>
    );
  }
});

module.exports = ManageCourse;