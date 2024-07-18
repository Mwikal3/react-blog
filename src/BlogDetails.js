import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
   const { id }=useParams();
   const{data:article, error, isPending}= useFetch('https://checkitinvestments.com/articles/' + id);

   const history=useHistory();


   const handleClick = () =>{
    fetch('https://checkitinvestments.com/articles/' +article.id,{
        method: 'DELETE'
    }).then(()=>{
        history.push('/')
    })
   }

    return ( 
        <div className="blog-details">
            {isPending && <div>loading...</div>}
            {error && <div>{error}`</div>}
            {article && (
                <article>
                    <h2>{ article.title }</h2>
                    <p>written by { article.author }</p>
                    <div>{ article.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;

// import { useParams } from "react-router-dom";
// import useFetch from "./useFetch";
// import { useHistory } from "react-router-dom";
// import axios from "axios";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const { data: blog, error, isPending } = useFetch(`https://checkitinvestments.com/articles/${id}`);
//   const history = useHistory();

//   const handleClick = () => {
//     axios.delete(`https://checkitinvestments.com/articles/${blog.id}`)
//       .then(() => {
//         history.push('/');
//       })
//       .catch(err => {
//         console.error('Delete error:', err.message);
//       });
//   }

//   return (
//     <div className="blog-details">
//       {isPending && <div>Loading...</div>}
//       {error && <div>{error}</div>}
//       {blog && (
//         <article>
//           <h2>{ blog.title }</h2>
//           <p>Written by { blog.author }</p>
//           <div>{ blog.body }</div>
//           <button onClick={handleClick}>Delete</button>
//         </article>
//       )}
//     </div>
//   );
// }

// export default BlogDetails;