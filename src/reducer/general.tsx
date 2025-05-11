import { ACTIONS, INITIAL_STATE } from '@Maplify/constant';

const generalReducer = (
  state = INITIAL_STATE,
  { type, payload }: { type: string; payload: any },
) => {
  switch (type) {
    case ACTIONS.SET_ACTIVE_TAB:
      return { ...state, activeTab: payload.tab, selectedPlace: [] };
    case ACTIONS.SET_IS_SEARCHING:
      return { ...state, isSearching: payload.isSearching };
    case ACTIONS.SET_CURRENT_LOCATION:
      return { ...state, currentLocation: payload.currentLocation };
    case ACTIONS.SET_SUGGESTED_PLACES:
      return {
        ...state,
        suggestedPlaces: [...payload.suggestedPlaces],
        selectedPlace: {},
      };
    case ACTIONS.SET_SELECTED_PLACE:
      return {
        ...state,
        selectedPlace: {
          ...(state.activeTab
            ? { ...state.history[payload.selectedPlaceIndex] }
            : { ...state.suggestedPlaces[payload.selectedPlaceIndex] }),
          selectedPlaceIndex: payload.selectedPlaceIndex,
        },
      };
    case ACTIONS.SET_HISTORY:
      return {
        ...state,
        history: [...payload.history],
      };
  }
};
export default generalReducer;
