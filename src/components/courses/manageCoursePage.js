"use strict";

var React = require('react');
var CourseForm = require('./courseForm');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');

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
      authors: [],
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() {
    AuthorStore.addChangeListener(this._onChange);
    var courseid = this.props.params.id;
    if (courseid) {
      this.state.course = CourseStore.getCourseById(courseid);
    }

    this.state.authors = AuthorStore.getAllAuthors().map(function(author) {
      return {
        id: author.id,
        name: author.firstName + ' ' + author.lastName
      };
    });

    this.setState(this.state);
  },

  componentWillUnmount: function() {
    AuthorStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ authors: AuthorStore.getAllAuthors() });
  },

  setCourseState: function(event) {
    this.state.dirty = true;
    var field = event.target.name,
        value = event.target.value;
    
    if (field === 'author' && event.target.type === 'select-one') {
      this.state.course.author.id = event.target.selectedOptions[0].value;
      this.state.course.author.name = event.target.selectedOptions[0].text;
    } else {
      this.state.course[field] = value;
    }

    this.setState({ course: this.state.course });
  },

  onSave: function() {
    if (!this.state.dirty) {
      return;
    }
  },

  render: function() {
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm
          onChange={this.setCourseState}
          onSave={this.onSave}
          course={this.state.course}
          authors={this.state.authors}
          errors={this.state.errors} />
      </div>
    );
  }
});

module.exports = ManageCourse;