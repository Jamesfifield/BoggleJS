const gameUtils = {
  get2DArray: (size) => new Array(+size).fill(new Array(+size).fill("")),
  hasConnectedPath: (from, to) =>
    !from || !to
      ? true
      : Boolean(
          Math.sqrt(Math.pow(from.row - to.row, 2)) <= 1 &&
            Math.sqrt(Math.pow(from.col - to.col, 2) <= 1)
        ),
};

export default gameUtils;
