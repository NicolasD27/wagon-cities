import cities from '../actions/cities'
export default function(state, action) {
	if (state === undefined) {
		return cities[0];
	}
	
	if (action.type === 'SET_ACTIVE_CITY') {
		return action.payload;
	} else {
		return state
	}
}
