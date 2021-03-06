import React, {Component} from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component{
    render(){ 
        const {match,posts} = this.props      
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id === id)
        const comments = this.props.comments[id] || [] 
        const index = this.props.posts.findIndex((post) => post.id === id)
        //console.log(post);

        if(this.props.loading === true){
            return <div>..Loading</div>

        }else if(post){
            return <div className="container">
                <Photo post={post} {...this.props} index={index}/>
                <Comments startAddingComment = {this.props.startAddingComment} comments = {comments} id={id}/>
            </div>
        }else{
            return <h1> No Post Found.</h1>
        }
            // <div className="row comment_container">
            //     <div className="col-sm-6">.col-sm-4</div>
            //     <div className="col-sm-6">.col-sm-4</div>
            // </div>
        
    }   
}

export default Single
