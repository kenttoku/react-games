export const TTT_PLAY_CELL = 'TTT_PLAY_CELL';
export const tttPlayCell = cell => ({
  type: TTT_PLAY_CELL,
  cell,
});

export const TTT_RESET_BOARD = 'TTT_RESET_BOARD';
export const tttResetBoard = () => ({
  type: TTT_RESET_BOARD,
});
