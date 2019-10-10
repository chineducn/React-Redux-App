import * as types from './actionTypes';

export function characterReducer(characterList=[], action) {
    switch (action.type) {
        case types.GET_CHARACTERS: {
            return action.payload;
        }
        default:
            return characterList;
    }
};