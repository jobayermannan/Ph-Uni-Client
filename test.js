


// const adminPaths2= [

// 	{
// 		name: 'Dashboard',
// 		path:'dashboard',
// 		element: 'ADMIN_DASHBOARD'
// 	},{
// 		name: 'User Management',
// 		Children:[
// 			{
// 				name: 'create-admin',
// 				path:'create-admin',
// 				element: 'CREATE_ADMIN'
// 			},	{
// 				name: 'create-faculty',
// 				path:'create-faculty',
// 				element: 'CREATE_FACULTY'
// 			},	{
// 				name: 'create-student',
// 				path:'create-student',
// 				element: 'CREATE_STUDENT'
// 			},
// 		]
// 	}
// ]









// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       key: item.path,
//       label: "Navlink",
//     });
//   } 
  
//   else if (item.Children) {
  
//       acc.push({
//         key: item.name,
//         label:item.name,
//         Children:item.Children.map((child)=>{
//           return {
//             key:child.name,
//           label:"navlink"
//           }
//         })
//       });
    
//   }

//   return acc;
// }, []);

// console.log(JSON.stringify(newArray));










// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   } else if (item.Children) {
//     item.Children.forEach(child => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

// console.log(newArray);








// const arr = [1, 2, 3, 4,5];

// const result = arr.reduce((acc, item) => {
//   // Adding the current item to the accumulator
//   console.log(acc)
//   acc.push( item);
//   return acc;
// }, []); // Initialize the accumulator with an array containing 0

// console.log(result);






      let data= [5, 3, 8, 4, 2];
	for (let i = 0; i < data.length-1; i++) {
		console.log("index =>",i,"number =>" ,data.property)
		
	
		
	}
	 // Return -1 if the target is not found
 
 
 // Example usage:

// Output: 3



 


// function binarySearch(sortedArr, target) {
// 	let left = 0;
// 	let right = sortedArr.length - 1;
 
// 	while (left <= right) {
// 	  const mid = Math.floor((left + right) / 2);
 
// 	  if (sortedArr[mid] === target) {
// 		 return mid; // Return the index of the target element
// 	  } else if (sortedArr[mid] < target) {
// 		 left = mid + 1;
// 	  } else {
// 		 right = mid - 1;
// 	  }
// 	}
 
// 	return -1; // Return -1 if the target is not found
//  }
 
//  // Example usage:
//  const numbers = [2, 3, 4, 5, 8];
//  const target = 5;
//  console.log(binarySearch(numbers, target)); // Output: 3