
import React from "react";
const ViewPost = ({match: { params: { id } } })=>   {
    console.log('match' , id);
    return(
        <div>
            <h1>veiw post</h1>
        </div>
    )
}
export default ViewPost;