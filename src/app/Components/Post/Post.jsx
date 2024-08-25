import React from 'react'
import "./Post.css";
import { newPost } from './data.js';

export const PostSection = () => {
  return (
    <div className="post">
        <div className="post_main">
            {newPost.map(posts => (
                <div className="post_card" key={posts.id}>
                    <div className="post_box">
                        <img src={posts.icon} alt="" />
                        <p>{posts.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}