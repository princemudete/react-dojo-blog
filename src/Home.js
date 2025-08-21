// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);
        // [{ title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        // { title: "Welcome party!", body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        // { title: "Web dev top tips", body: "lorem ipsum...", author: 'mario', id: 3 }]

    // const [name, setName] = useState("mario");

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("http://localhost:8000/blogs")
    //            .then((res) => {
    //             // console.log(res);
    //             if(!res.ok) {
    //               throw Error("could not fetch the data for that resource");
    //             }  
    //             return res.json();
    //            })
    //            .then(data => {
    //             // console.log(data)
    //             setBlogs(data);
    //             setIsPending(false);
    //             setError(null);
    //             })
    //             .catch(err => {
    //                 setIsPending(false);
    //                 // console.log(err.message);
    //                 setError(err.message);
    //             })
    //     }, 1000);   
    //     // console.log('use effect ran');
    //     // console.log(name);
    //     // console.log(blogs);
    // }, []);
//  let name = "peter";
// const [name, setName] = useState("peter");
// const [age, setAge] = useState(25);
 
//  const handleClick = () => {
//     setName("luigi");
//     setAge(30);    // name = "Luigi";
    // console.log(name)

    // const handleClick = () => { 
    //     console.log('Hello, ninjas!');
    // }
    // const handleClickAgain = (name, e) => {
    //     console.log('Hello ' + name, e.target);
    // }    
    return ( 
           
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> } 
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <button onClick={() => setName("luigi")}>change name</button>
            <p>{ name }</p> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's blogs!" /> */}
            {/* <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e) => handleClickAgain("mario", e)}>Click me again</button> */}
        </div>    
     );
}
 
export default Home; 