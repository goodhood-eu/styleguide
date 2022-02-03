/* eslint-disable no-unused-vars */
const Component = {};

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

class RenderRequired extends Component {
  render() {
    return <div>{this.content}</div>;
  }
}

const NestedComponentProp = () => <Component getSwitch={(item) => <Empty>{item}</Empty>} />;
