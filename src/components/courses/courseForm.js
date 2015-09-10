"use strict";

var React = require('react');
var Input = require('../common/textInput');

var CourseForm = React.createClass({

  propTypes: {
    course: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    error: React.PropTypes.object
  },

  render: function() {
    return (
      <form>
        <Input
          name="title"
          label="Course Title"
          value={this.props.course.title}
          onChange={this.props.onChange}
          error={this.props.errors.title} />

        <Input
          name="author"
          label="Author Name"
          value={this.props.course.author.name}
          onChange={this.props.onChange}
          error={this.props.errors.author.name} />

        <Input
          name="category"
          label="Course Category"
          value={this.props.course.category}
          onChange={this.props.onChange}
          error={this.props.errors.category} />

        <Input
          name="watchHref"
          label="Course Link"
          value={this.props.course.watchHref}
          onChange={this.props.onChange}
          error={this.props.errors.category} />

        <Input
          name="length"
          label="Course Length"
          value={this.props.course.length}
          onChange={this.props.onChange}
          error={this.props.errors.length} />

        <input type="submit"
          value="Save"
          className="btn btn-default"
          onClick={this.props.onSave} />
      </form>
    );
  }
});