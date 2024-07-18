// // netlify/functions/list.js

// const data = [
//     {
//         "title": "My First Blog",
//         "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque quam vel augue fringilla, sed aliquet mi sollicitudin. Donec vestibulum velit et ipsum varius, nec volutpat nisi placerat. Vivamus sit amet nunc in magna bibendum blandit. Praesent laoreet dapibus mi, a aliquam arcu consectetur ut. Ut ullamcorper ex sit amet erat congue, nec viverra lectus dictum. Sed pulvinar, justo a ullamcorper facilisis, turpis urna bibendum turpis, in varius libero quam eu lectus. Integer sodales, nulla a cursus condimentum, dolor sapien vulputate tortor, ac suscipit eros sapien non nisi. Fusce non ultrices augue. Nullam at urna justo. Etiam convallis, ipsum ut pellentesque vestibulum, odio sem aliquam mi, ac ullamcorper augue urna sit amet dolor. Cras nec purus vel lorem efficitur malesuada.",
//         "author": "mario",
//         "id": "1"
//       },
//       {
//         "title": "Opening party",
//         "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque quam vel augue fringilla, sed aliquet mi sollicitudin. Donec vestibulum velit et ipsum varius, nec volutpat nisi placerat. Vivamus sit amet nunc in magna bibendum blandit. Praesent laoreet dapibus mi, a aliquam arcu consectetur ut. Ut ullamcorper ex sit amet erat congue, nec viverra lectus dictum. Sed pulvinar, justo a ullamcorper facilisis, turpis urna bibendum turpis, in varius libero quam eu lectus. Integer sodales, nulla a cursus condimentum, dolor sapien vulputate tortor, ac suscipit eros sapien non nisi. Fusce non ultrices augue. Nullam at urna justo. Etiam convallis, ipsum ut pellentesque vestibulum, odio sem aliquam mi, ac ullamcorper augue urna sit amet dolor. Cras nec purus vel lorem efficitur malesuada.",
//         "author": "kisilu",
//         "id": "2"
//       },
//       {
//         "title": "Naivasha trip",
//         "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque quam vel augue fringilla, sed aliquet mi sollicitudin. Donec vestibulum velit et ipsum varius, nec volutpat nisi placerat. Vivamus sit amet nunc in magna bibendum blandit. Praesent laoreet dapibus mi, a aliquam arcu consectetur ut. Ut ullamcorper ex sit amet erat congue, nec viverra lectus dictum. Sed pulvinar, justo a ullamcorper facilisis, turpis urna bibendum turpis, in varius libero quam eu lectus. Integer sodales, nulla a cursus condimentum, dolor sapien vulputate tortor, ac suscipit eros sapien non nisi. Fusce non ultrices augue. Nullam at urna justo. Etiam convallis, ipsum ut pellentesque vestibulum, odio sem aliquam mi, ac ullamcorper augue urna sit amet dolor. Cras nec purus vel lorem efficitur malesuada.",
//         "author": "kisilu",
//         "id": "3"
//       }
//   ];
  
//   exports.handler = async function(event, context) {
//     if (event.httpMethod === "GET" && event.path === "/.netlify/functions/list") {
//       return {
//         statusCode: 200,
//         body: JSON.stringify(data),
//       };
//     } else if (event.httpMethod === "GET" && event.path === "/.netlify/functions/filter") {
//       const query = new URLSearchParams(event.queryStringParameters).get("query");
//       const filteredData = data.filter(item => item.title.includes(query));
//       return {
//         statusCode: 200,
//         body: JSON.stringify(filteredData),
//       };
//     } else {
//       return {
//         statusCode: 404,
//         body: JSON.stringify({ message: "Not Found" }),
//       };
//     }
//   };