/* eslint-disable no-unused-vars */
const Bool = (
  <div
    // expect: react/jsx-boolean-value
    show={true}
  />
);

const PropsPass = (props) => {
  const { a, b, ...rest } = props;
  return <div {...props} />;
};
