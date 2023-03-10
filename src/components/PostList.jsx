import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';

function PostList(){
    return (
      <>
        <NewPost />
            <ul className={classes.posts}>
                <Post author="Jordan Walke" body="ReactJs is awesome!"/>
                <Post author="Manuel" body="Check out the full course"/>
            </ul>
      </>
    );
}

export default PostList;