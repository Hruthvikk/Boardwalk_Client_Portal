﻿import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface RemoveEquipmentsState {
    isLoading: boolean;
    startDateIndex?: number;
    RemoveEquipment: RemoveEquipments[];
}

export interface RemoveEquipments {
    id: number;
    clientId: number;
    equipId: number;
    requestTime: Date;
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestRemoveEquipmentsAction {
    type: 'REQUEST_REMOVE_EQUIPMENTS';
    startDateIndex: number;
}

interface ReceiveRemoveEquipmentsAction {
    type: 'RECEIVE_REMOVE_EQUIPMENTS';
    startDateIndex: number;
    RemoveEquipment: RemoveEquipments[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestRemoveEquipmentsAction | ReceiveRemoveEquipmentsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestRemoveEquipments: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.RemoveEquipments && startDateIndex !== appState.RemoveEquipments.startDateIndex) {
            fetch(`api/Equipments/GetRemoveEquipment`)
                .then(response => response.json() as Promise<RemoveEquipments[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_REMOVE_EQUIPMENTS', startDateIndex: startDateIndex, RemoveEquipment: data });
                });

            dispatch({ type: 'REQUEST_REMOVE_EQUIPMENTS', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: RemoveEquipmentsState = {RemoveEquipment: [], isLoading: false };

export const reducer: Reducer<RemoveEquipmentsState> = (state: RemoveEquipmentsState | undefined, incomingAction: Action): RemoveEquipmentsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_REMOVE_EQUIPMENTS':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                RemoveEquipment: state.RemoveEquipment,
                isLoading: true
            };
        case 'RECEIVE_REMOVE_EQUIPMENTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    RemoveEquipment: action.RemoveEquipment,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};


