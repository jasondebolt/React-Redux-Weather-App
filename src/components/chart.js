import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// First step in developing a React-Redux component is designing the Redux
// state, action, action creator, and reducer.
// Next step is to determine whether you need a component or a container.
// If your component doesn't need access to application state, it should
// be a component, otherwise it should be a container.
// Lastly, if you decided to use a component, decide if it should be a class // based component or a function based component. If you don't need any
// state within the component at all (component state != application state),
// then you can use a functional component.

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}
