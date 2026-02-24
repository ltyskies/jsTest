var sumRootToLeaf = function(root) {
    let sum = 0
    function dfs(node,str){
       if(node === null){
           return
       }
       if(node.left === null && node.right === null){
          sum += parseInt(str + node.val,2)
          return
       }
        dfs(node.left,str + node.val)
        dfs(node.right,str + node.val)
    }
    dfs(root,'')
    return sum
};