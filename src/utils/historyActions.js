export const getHistory = async () => {
  let historyData = JSON.parse(window.localStorage.getItem('historyData')) || []
  try{
    historyData = await fetch(window.location.origin.replace(/\d+$/, '3019/history'))
      .then(r => r.json())
    
    window.localStorage.setItem('historyData', JSON.stringify(historyData))
  } finally {
    return historyData
  }
}

export const setHistory = async (historyData) => {
  try{
    window.localStorage.setItem('historyData', JSON.stringify(historyData))
    historyData = await fetch(window.location.origin.replace(/\d+$/, '3019/history'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(historyData)
    })
  } catch(e) {
    return JSON.parse(window.localStorage.getItem('historyData')) || []
  }
}