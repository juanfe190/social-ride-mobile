import AppDispatcher from '../dispatcher/dispatcher';

module.exports = {
	holaMundo: function(){
		AppDispatcher.dispatch({
			actionType: 'holaMundo'
		});
	}
}