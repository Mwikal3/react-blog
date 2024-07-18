import { Link } from "react-router-dom";

const BlogList = ({articles,title}) => {
  if(!Array.isArray(articles)){
    return <div>loading...</div>
  }

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {articles.map((article) =>(
            <div className="blog-preview" key={article.id}>
                <Link to={`/blogs/${article.id}`}>
                    <h2>{ article.title}</h2>
                    <p>Written by {article.author}</p>
                </Link>
               

            </div>
        ))}

        </div>
        
     );
}
 
export default BlogList;