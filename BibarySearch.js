// binarySearchTreeSearch**************************************************************
// class TreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }
// function insertIntoBST(root, val) {
//   if (root === null) {
//     return new TreeNode(val);
//   }

//   if (val < root.val) {
//     root.left = insertIntoBST(root.left, val);
//   } else {
//     root.right = insertIntoBST(root.right, val);
//   }
//   return root;
// }
// function binarySearchTreeSearch(root, target) {
//   if (root === null) {
//     return false;
//   }
//   if (root.val === target) {
//     return true;
//   } else if (root.val < target) {
//     return binarySearchTreeSearch(root.right, target);
//   } else {
//     return binarySearchTreeSearch(root.left, target);
//   }
// }
// const values = [11, 122, 3, 4, 5, 6, 7, 10];
// let bstRoot = null;

// for (const val of values) {
//   bstRoot = insertIntoBST(bstRoot, val);
// }
// console.log(binarySearchTreeSearch(bstRoot, 122)); // true
// console.log(binarySearchTreeSearch(bstRoot, 11)); // false
// *******************************************************************

// Binary serech *******************************************************************
// const Binaty = (arr, target) => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let i = Math.floor((left + right) / 2);

//     if(arr[i]===target) return true
//     if(arr[i]<target) left = i+1
//     else right = i-1
//   }
//   return false
// };
// const sum = Binaty(value = [400,2,3].sort((a,b)=>a-b),400)
// console.log(sum);

// Binary serech *******************************************************************

// SORT DATA *******************************************************************
// const A = [1,2,3,3999,4,5].sort((a,b)=>a-b)
// const B = ['apple','banana','oran'].sort((a,b)=> a.length - b.length)
// const string = ['B','A','C','1','3'].sort()
// console.log(B);
// *******************************************************************

// function Flug(a){
//   if(a <= 0)return BigInt(1)
//   else return BigInt(a) * (Flug(a-1))
// }

// console.log(Flug(15));

// const Big = require('big.js');

// function factorialBigJS(n) {
//     if (n <= 1) {
//         return Big(1);
//     }
//     const nBig = Big(n);
//     return nBig.times(factorialBigJS(n - 1));
// }

// const result = factorialBigJS(15);
// console.log(result.toString());

const Bibary = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return true;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};
console.log(
  Bibary(
    [3, 100, 1].sort((a, b) => a - b),
    100
  )
);
