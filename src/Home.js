import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const{data: articles, isPending, error} = useFetch('https://checkitinvestments.com/articles');
  


    return ( 
        <div className="home"> 
        {error && <div>{error}</div>}
        {isPending && <div>loading...</div>}
      {articles && Array.isArray(articles)&& <BlogList articles={articles} title="all blogs!" />}
        </div>
     );
}
 
export default Home;

// import React from 'react';
// import useFetch from './useFetch';
// import BlogList from './BlogList';

// const Home = () => {
//   const { data: articles, isPending, error } = useFetch('https://checkitinvestments.com/articles');

//   return (
//     <div className="home">
//       {error && <div>{error}</div>}
//       {isPending && <div>Loading...</div>}
//       {articles && <BlogList articles={articles} title="All Blogs" />}
//     </div>
//   );
// };

// export default Home;