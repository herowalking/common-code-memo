// DFS
const updateBoard = (board, click) => {
  const m = board.length;
  const n = board[0].length;
  const dx = [1, 1, 1, -1, -1, -1, 0, 0];
  const dy = [1, 0, -1, 0, 1, -1, 1, -1];
  const inBound = (x, y) => x >= 0 && x < m && y >= 0 && y < n; // 辅助函数

  const update = (x, y) => {
    if (!inBound(x, y) || board[x][y] != 'E') return; // 不在界内或不是E，直接返回
    let count = 0;
    for (let i = 0; i < 8; i++) { // 统计周围雷的个数
      const nX = x + dx[i];
      const nY = y + dy[i];
      if (inBound(nX, nY) && board[nX][nY] == 'M') {
        count++;
      }
    }
    if (count == 0) { // 如果周围没有雷，标记B，递归周围的点
      board[x][y] = 'B';
      for (let i = 0; i < 8; i++) {
        update(x + dx[i], y + dy[i]);
      }
    } else { 
      board[x][y] = count + '';
    }
  };

  const [cX, cY] = click;
  if (board[cX][cY] == 'M') { // 第一下就踩雷了
    board[cX][cY] = 'X';
  } else {
    update(cX, cY); // 开启dfs
  }
  return board;
};

// BFS
const updateBoard = (board, click) => {
  const m = board.length;
  const n = board[0].length;
  const dx = [1, 1, 1, -1, -1, -1, 0, 0];
  const dy = [1, 0, -1, 0, 1, -1, 1, -1];
  const inBound = (x, y) => x >= 0 && x < m && y >= 0 && y < n;

  const bfs = (x, y) => {
    const queue = [[x, y]];
    while (queue.length) {
      const [x, y] = queue.shift();
      let count = 0;
      for (let i = 0; i < 8; i++) {
        const nX = x + dx[i];
        const nY = y + dy[i];
        if (inBound(nX, nY) && board[nX][nY] == 'M') {
          count++;
        }
      }
      if (count == 0) {
        board[x][y] = 'B';
        for (let i = 0; i < 8; i++) {
          const nX = x + dx[i];
          const nY = y + dy[i];
          if (inBound(nX, nY) && board[nX][nY] == 'E') {
            board[nX][nY] = 'B'; // 变成一个非E字符就行，标记这个节点访问过了
            queue.push([nX, nY]);
          }
        }
      } else {
        board[x][y] = count + '';
      }
    }
  };

  const [cX, cY] = click;
  if (board[cX][cY] == 'M') {
    board[cX][cY] = 'X';
  } else {
    bfs(cX, cY);
  }
  return board;
};