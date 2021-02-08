import React from 'react';
import './BlogCard.css';
import {blogs} from "../../portfolio";

function BlogCard({ blogs }: Props) {
    const Fade = require('react-reveal/Fade')
    return (
        <Fade duration={800} bottom>
        <a className="blog-card" href={blogs.url} target="_blank" rel="noopener noreferrer">
            <div className="blog-image">
                <img className="image" src={blogs.img_url} alt="img" />
            </div>
            <div className="blog-card-title">
                <p>{blogs.title}</p>
            </div>
            <div className="blog-card-desc">
                <p>{blogs.desc}</p>
            </div>
        </a>
        </Fade>
    )
}
interface Props {
    blogs: {
        title: string,
        desc: string,
        img_url: string,
        url: string
    }
}
export default BlogCard;