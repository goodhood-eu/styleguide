/* eslint-disable no-unused-vars */
import * as PropTypes from 'prop-types';

const React = {};

const Alignment = (
  <div
    className="class"
  />
);

const CurlySpacing = <div className={`class${1}`} />;

const Keys = [].map((item) => (
  <div key={item} />
));

const Ref = () => <div ref={(el) => el} />;

const Empty = () => <div />;

class RenderRequired extends React.Component {
  render() {
    const { name } = this.props;

    console.log(RenderRequired.propTypes);

    this.content = (<div {...{ name }} />);
    return <div>{this.content}</div>;
  }
}

RenderRequired.propTypes = {
  name: PropTypes.string,
};
