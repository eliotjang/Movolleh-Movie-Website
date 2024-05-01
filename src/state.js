class StateManager {
  constructor() {
    this._state = {
      isSearching: false,
      currentPage: 1,
      total_pages: 0,
      currentSearchQuery: '',
      movieData: [],
    };
  }
  getState() {
    return JSON.parse(JSON.stringify(this._state));
  }
  updateState(newState) {
    this._state = { ...this._state, ...newState };
    console.log('State updated:', this._state);
  }
}

const stateManager = new StateManager();
export default stateManager;
