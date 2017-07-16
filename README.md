# React-Redux-Weather-App

### Getting Started

```
> npm install
> npm start
```


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


#### Terminology

##### Controlled Fields
A controlled field is a form input that is set by the state of our component, not the other way around. This is component state, not application/Redux state. There is also state of the element in the DOM (value of the input), so three types of state (application/redux, component, element).
