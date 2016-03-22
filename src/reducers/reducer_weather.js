import { FETCH_WEATHER } from '../actions/index';

export default function(state = null, action) {
    switch (action,type) {
      case FETCH_WEATHER:
        // BAD do not manipulate (or state) state directly, [city,
        // [city, [city]]]
        // return state.push[ action.payload.data ];
        // BETTER
        // return state.concat([action.payload.data]);
        // BEST (ES6) - this does not mutate the state, returns entirely new array,
        //  [city, city]
        return [ action.payload.data, ...state];
      }
  return state;
}
