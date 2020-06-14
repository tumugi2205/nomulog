import React from "react"
import "./BlogList.css"
import { Link } from 'react-router-dom'
import useReactRouter from 'use-react-router';

const BlogList = ({ data }) => {
  const { match , location, history } = useReactRouter();
  console.log(match)
  console.log(location)
  console.log(history)
  return (
    <>
      {!data && <h1>Loading...</h1>}
      {data &&
        data.map((d, i) => {
          return (
            <div className="block_list">
            <Link to={'/blog_item/' + d.id} key={i}>
              <div className="blog_block">
                <div className="blog_block__title">{d.title}</div>
                <div className="blog_block__summary">{d.summary}</div>
                <div className="blog_block__created_at">{d.created_at}</div>
              </div>
            </Link>
            </div>
          )
        })}
    </>
  )
}
export default BlogList
