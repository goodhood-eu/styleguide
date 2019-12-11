/* eslint-disable no-unused-vars, max-classes-per-file */
const React = {};

// expect: react/no-deprecated
const Method = React.createClass({});

// expect: react/prefer-stateless-function
class Inherited extends React.Component {
  render() {
    return null;
  }
}
