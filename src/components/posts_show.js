import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';


class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);    
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                // blog post has been created, navigate the user to the index
                // we navigate by calling this.context.router.push the
                // new path to navigate to.
                this.context.router.push('/');
            });

    }

    render() {
        const {post} = this.props;

        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/">Back to index</Link>
                <button 
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h5>Categories: {post.categories}</h5>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {post: state.posts.post}
}

export default connect(mapStateToProps, {fetchPost,deletePost})(PostsShow);