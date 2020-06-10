import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> );
    let newPostElement = React.createRef();
    let addPost = () =>{
        props.dispatch({type:'ADD-POST'});
    };
    let onPostChange=()=>{
        let text = newPostElement.current.value;
        props.dispatch({type:'UPDATE-POST-TEXT',newText:text});


    };
    return (

        <div>
            My Posts
            <div>
                New post
                <textarea onChange={onPostChange} ref={newPostElement} value ={props.newPostText}/>
                <button onClick={addPost}>add post</button>
                <button>remove</button>

            </div>
            <div className={s.posts}>

                {postsElements}

            </div>


        </div>

    )
}
export default MyPosts;