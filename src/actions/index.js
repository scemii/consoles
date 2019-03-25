// action creator

export const selectConsole = console => {
  // return action
  return {
    type: "CONSOLE_SELECTED",
    payload: console
  };
};
