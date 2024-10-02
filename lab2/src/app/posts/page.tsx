"use client"

import { useEffect, useState } from "react";

interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}



const Posts = () => {
    const urlApi = "https://jsonplaceholder.typicode.com/posts"

    const [posts, setPosts] = useState<Posts[]>();


    useEffect(() => {
        // Fetching data from API
        // Use async/await for better error handling
        async function fetchData() {
            try {
                const response = await fetch(urlApi);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [])


    return (
        <div className="flex flex-col items-center justify-center text-center gap-4">
            <h1 className="pt-4">Posts Page</h1>
            {posts?.map((post: Posts) =>
                <div className="flex flex-col bg-orange-300 p-4 rounded-lg w-3/4" key={post.id}>
                    <h2>Title: {post.title}</h2>
                    <p>Body: {post.body}</p>
                </div>)}
        </div>
    )
}

export default Posts;