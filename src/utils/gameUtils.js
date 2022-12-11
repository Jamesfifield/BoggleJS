const gameUtils = {
  get2DArray: (size) => new Array(+size).fill(new Array(+size).fill("")),
  hasConnectedPath: (from, to) =>
    !from || !to
      ? true
      : Boolean(
          Math.sqrt(Math.pow(from.row - to.row, 2)) <= 1 &&
            Math.sqrt(Math.pow(from.col - to.col, 2) <= 1)
        ),
  vectorDistance: (vect1, vect2) => [vect1[0] - vect2[0], vect1[1] - vect2[1]],
};

export default gameUtils;
