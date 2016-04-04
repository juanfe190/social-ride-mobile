import AppDispatcher from '../dispatcher/dispatcher';
import {EventEmitter} from 'events';

module.exports = IndexStore;
var IndexStore = Object.assign({}, EventEmitter.prototype,{
	addChangeListener: function(callback){
		this.on(ChangeEvent, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(callback);
	},
	emitChange: function(){
		this.emit(ChangeEvent);
	},

	getState: function(){
		return data;
	}
});

/**************************************
************ DISPATCHER ***************
***************************************/
AppDispatcher.register(function(action){
	switch(action.actionType){
		//Evento de ejemplo
		case 'holaMundo':
			console.log('Hola mundo!');
			break;

		default:
			break;
	}
});