# React-Redux-Weather-App

### Getting Started

```
> npm install
> npm start
```


### How this app works
The user enters a search term (a city in the US) and submits the form. That calls
the action creator fetchWeather in src/actions/index.js with the name of the city.
The action creator then crafts a URL with the city and makes an XHR request, and axios returns a promise. The action creator returns the promise in the payload of the action. The ReduxPromise middleware intercepts the action in transit between the action creator and the reducer and inspects the payload. If the payload is a promise, ReduxPromise stops the action entirely. Once the XHR request finishes, it dispatches a NEW action of the SAME type (FETCH_WEATHER) with a payload of the resolved request. So, the ReduxPromise middleware unwraps the promise for us. The reducers don't care about the promise, they care about the data. If we didn't have middleware to intercept the action, our reducer would have to implement logic to wait until the action is resolved before executing a switch statement.


### installing ReduxPromise
ReduxPromise is already installed in this app, but if you want to install it for another project, here are the steps:
```
1) $ npm install --save ReduxPromise
2) In srce/index.js:
     import { createStore, applyMiddleware } from 'redux';
     import ReduxPromise from 'redux-promise';

     const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

     ReactDOM.render(
       <Provider store={createStoreWithMiddleware(reducers)}>
         <App />
       </Provider>
       , document.querySelector('.container'));
```

### installing Axios & React-Sparklines
```
$ npm install --save axios
$ npm install -save react-sparklines
```

#### Terminology

##### Controlled Fields
A controlled field is a form input that is set by the state of our component, not the other way around. This is component state, not application/Redux state. There is also state of the element in the DOM (value of the input), so three types of state (application/redux, component, element).
