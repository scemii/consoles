// action creator

export const selectConsoleNintendo = nintendo => {
  // return action
  return {
    type: "CONSOLE_SELECTED",
    payload: nintendo
  };
};

export const selectConsoleSega = sega => {
  // return action
  return {
    type: "CONSOLE_SELECTED_SEGA",
    payload: sega
  };
};
