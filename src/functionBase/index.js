import { useState ,useEffect} from "react";
import axios from "axios";
function FunctionBase() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res);
      const { data = []} = res; 
      setPosts(data);
    }).catch(err => console.log(err));
  },[])
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
              posts.length !== 0?
                posts.map((post, index) => {
                  return (
                    <tr key={index}>
                      <td>{post.userId}</td>
                      <td>{post.id}</td>
                      <td>{post.body}</td>
                      <td>{post.title}</td>
                      <td><button>View</button></td>
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
export default FunctionBase;
