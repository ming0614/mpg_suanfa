/**
 * @author mpg
 * @date 2020-11-20
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//箭头函数
const twoSum =(nums,target) =>{
   // console.log('两数相加')
   let map= {}; //JSON Object
   let res=[];
   //编写你功能 一个函数完成一个功能
   //callback
   //for +执行功能
   nums.forEach((e,i) =>map[e]=i); //0(n) 以空间换时间
   // console.log(map);
    for(let i=0;i<nums.length;i++){
        let j=map[target-nums[i]]; //undefined
        if(j && j !=i){
            res=[i,j];
            break;
        }
    }
   return res;
}

console.log(twoSum([2,7,11,15],9));