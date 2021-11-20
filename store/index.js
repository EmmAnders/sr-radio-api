// holds your root state
export const state = () => ({
  showAudioPlayer: false,
});

// contains your actions
export const actions = {
  counterUp({ state, commit }) {
    commit("setCounter", state.counter + 1);
  },
};
// contains your mutations
export const mutations = {
  TOGGLE_AUDIO_PLAYER(state, value) {
    state.counter = value;
    state.showAudioPlayer = !state.showAudioPlayer;
  },
};

// your root getters
export const getters = {
  myGetter(state) {
    return state.counter + 1000;
  },
};
