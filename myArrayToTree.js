
const items = [
  {
    id: 1,
    parentId: 0
  },
  {
    id: 2,
    parentId: 1
  },
  {
    id: 3,
    parentId: 1   
  },
  {
    id: 4,    
    parentId: 2
  },
]

function buildTree(arr){
  const map = {}
  const result = []
  for(let item of items){
    map[item.id] = {...item,children: []}
  }
  for(let item of items){
    if(item.parentId !== 0){
      map[item.parentId].children.push(map[item.id])
    }else{
      result.push(map[item.id])
    }
  }
  return result
}
