class StateManager {
  constructor() {
    this._state = {
      isSearching: false,
      currentPage: 1,
      total_pages: 0,
      currentSearchQuery: "",
      movieData: []
    };
  }
  getState() {
    return JSON.parse(JSON.stringify(this._state));
  }
  updateState(newState) {
    Object.keys(newState).forEach((key) => {
      this._state[key] = newState[key];
    });
  }
}

const stateManager = new StateManager();
export default stateManager;
