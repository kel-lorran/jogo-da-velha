export const initCells = () => {
  const col = []
  const row = []
  for(let i = 0; i < 3; i++) {
    col.push(null)
  }
  for(let i = 0; i < 3; i++) {
    row.push(col)
  }
  return row
}

export const initChoices =  () => {
  const row = []
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      row.push([i, j])
    }
  }
  return row
}

export const victoryScenarios = (matrix) => {
  const len = matrix.length
  const row = []
  const col = []
  const dig = [new Set(), new Set]
  for(let i = 0; i < len; i++) {
    dig[0].add(matrix[i][i])
    dig[1].add(matrix[i][len - i - 1])
    row.push((new Set(matrix[i])))
    for(let j = 0; j < len; j++) {
      if(!i) col.push(new Set())
      col[j].add(matrix[i][j])
    }
  }
  return !![...row, ...col, ...dig ].filter(set => set.size === 1 && !set.has(null)).length
}