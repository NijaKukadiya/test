
import React from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";
class ClassBase extends React.Component {
  constructor() {
    super();
    this.state = {
      change: true,
      posts: []
    };
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res);
        const { data = [] } = res;
        this.setState({ posts: data });
      }).catch(err => console.log(err));
  }
  render() {
    const { posts } = this.state;
    console.log(posts);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>ID</th>
              <th>title</th>
              <th>body</th>
              <th>view</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              posts.length !== 0 ?
                posts.map((post, index) => {
                  return (
                    <tr key={index}>
                      <td>{post.userId}</td>
                      <td>{post.id}</td>
                      <td>{post.body}</td>
                      <td>{post.title}</td>
                      <td><Link to={`/posts/${post.id}`}>ViewPost</Link></td>
                      <td><button>Delete</button></td>
                    </tr>
                  )
                })
                : 'No data found'
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClassBase;
