function taskReducer(tasks, action) {
  switch (action.type) { 
    case 'added' :{
      return [
        ...tasks,
        {
          id: action.id,
          text: action,
          done:false
        }
      ]
    }
    case 'changed':{
      return tasks.map(ele => { 
        if (ele.id === action.id) {
          return action
        } else { 
          return ele
        }
      })
    }
    case 'deleted': { 
      return tasks.filter(ele=>ele.id!==action.id)
    }
    default: { 
      throw Error('未知 action: ' + action.type);
    }
  }
}

let chushiState=[];
let actions = [
  {type: 'added', id: 1, text: '参观卡夫卡博物馆'},
  {type: 'added', id: 2, text: '看木偶戏'},
  {type: 'deleted', id: 1},
  {type: 'added', id: 3, text: '打卡列侬墙'},
];

let final = actions.reduce(taskReducer, chushiState);
const output = document.getElementById('output');
output.textContent = JSON.stringify(final, null, 2);