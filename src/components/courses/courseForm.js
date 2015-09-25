"use strict";

var React = require('react');
var Input = require('../common/textInput');
var DropDown = require('../common/dropDown');

var CourseForm = React.createClass({

  propTypes: {
    course: React.PropTypes.object.isRequired,
    authors: React.PropTypes.array.isRequired,
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

        <DropDown
          name="author"
          label="Author"
          onChange={this.props.onChange}
          data={this.props.authors}
          dataKey="id"
          dataValue="name"
          selectedItem={this.props.course.author.id}
          error={this.props.errors.author} />

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

module.exports = CourseForm;