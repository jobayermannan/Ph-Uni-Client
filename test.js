


const adminPaths2= [

	{
		name: 'Dashboard',
		path:'dashboard',
		element: 'ADMIN_DASHBOARD'
	},{
		name: 'User Management',
		Children:[
			{
				name: 'create-admin',
				path:'create-admin',
				element: 'CREATE_ADMIN'
			},	{
				name: 'create-faculty',
				path:'create-faculty',
				element: 'CREATE_FACULTY'
			},	{
				name: 'create-student',
				path:'create-student',
				element: 'CREATE_STUDENT'
			},
		]
	}
]









const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      key: item.path,
      label: "Navlink",
    });
  } 
  
  else if (item.Children) {
  
      acc.push({
        key: item.name,
        label:item.name,
        Children:item.Children.map((child)=>{
          return {
            key:child.name,
          label:"navlink"
          }
        })
      });
    
  }

  return acc;
}, []);

console.log(JSON.stringify(newArray));










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


