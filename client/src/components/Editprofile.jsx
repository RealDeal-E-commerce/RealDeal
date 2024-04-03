import React, { useState, useEffect } from 'react';
import { useFetchCommentsQuery, useAddCommentMutation } from '../features/comments/commentApi'; // Import fetch and add comment hooks
import { FaHeart } from 'react-icons/fa';
import Dropzone from 'react-dropzone';
import { useDispatch } from 'react-redux';

function Userprofile({ user, data, deletepost, changeView, updateS }) {
    const dispatch = useDispatch();
    const [datap, setData] = useState(data);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');

    const { data: commentsData, isLoading: commentsLoading } = useFetchCommentsQuery(datap.map(post => post.id));

    useEffect(() => {
        if (commentsData) {
            // Update the data array with comments
            const updatedData = datap.map(post => ({
                ...post,
                comments: commentsData.filter(comment => comment.postId === post.id)
            }));
            setData(updatedData);
        }
    }, [commentsData]);

    // Mutation hook for adding a comment
    const [addComment] = useAddCommentMutation();

    const toggleLike = (index) => {
        const newData = [...datap];
        newData[index].liked = !newData[index].liked;
        setData(newData);
    };

    const handleUpdate = () => {
        updateS(user.id, {
            email: email !== '' ? email : user.email,
            password: password !== '' ? password : user.password,
            name: name !== '' ? name : user.name,
        });
    }

    
    const handleAddComment = async (postId, comment) => {
        try {
            const { data: createdComment } = await addComment({ postId, data: { comment, firstname: user.firstname } });
            
            const updatedData = datap.map(post => {
                if (post.id === postId) {
                    return {
                        ...post,
                        comments: [...post.comments, createdComment]
                    };
                }
                return post;
            });
            setData(updatedData);
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div>
            
            {datap.map((post, index) => (
                <div key={index}>
                    
                    <div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const comment = e.target.comment.value;
                            if (comment.trim() !== '') {
                                handleAddComment(post.id, comment);
                                e.target.comment.value = ''; 
                            }
                        }}>
                            <input type="text" name="comment" placeholder="Add a comment..." />
                            <button type="submit">Add</button>
                        </form>

                        {post.comments && post.comments.map(comment => (
                            <div key={comment.id}>
                                <p>{comment.comment}</p>
                                
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Userprofile;
