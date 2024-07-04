// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'

type Props = {
  name: string;
}

const Hello = (props: Props) => {
  const { name } = props;
  return <div>Hello {name}!</div>
};


Hello.propTypes = {
  name: PropTypes.string
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello name="React" />
  </React.StrictMode>
);
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
