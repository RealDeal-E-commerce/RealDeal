import React, { useEffect, useState } from 'react';
import FooTer from './footer.jsx';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';

function Userprofile({ user, changeView }) {
  const [dataP, setData] = useState([]);
  const [updatee, setUpdatee] = useState(false);
  const [comments, setComments] = useState({});
  const [commentInput, setCommentInput] = useState('');

  const fetchpost = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/post/");
      setData(response.data);
      fetchCommentsForPosts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCommentsForPosts = async (posts) => {
    try {
      const postIds = posts.map(post => post.id);
      const promises = postIds.map(postId => axios.get(`http://localhost:3000/api/post/${postId}/comment`));
      const responses = await Promise.all(promises);
      const commentsData = {};
      responses.forEach((response, index) => {
        const postId = postIds[index];
        commentsData[postId] = response.data;
      });
      setComments(commentsData);
    } catch (error) {
      console.error('Error fetching comments for posts:', error);
    }
  };

  const addComment = async (postId, content) => {
    try {
      const response = await axios.post(`http://localhost:3000/api/post/${postId}/comment`, { content, userId: user.id });
      setComments({ ...comments, [postId]: [...comments[postId], response.data] });
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const deleteComment = async (commentId, postId) => {
    try {
      await axios.delete(`http://localhost:3000/api/comments/${commentId}`);
      setComments({ ...comments, [postId]: comments[postId].filter(comment => comment.id !== commentId) });
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  useEffect(() => { fetchpost() }, [updatee]);

  const toggleLike = (index) => {
    const newData = [...dataP];
    newData[index].liked = !newData[index].liked;
    setData(newData);
  };

  const handleCommentSubmit = (postId) => {
    addComment(postId, commentInput);
    setCommentInput('');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        {/* Existing code for header */}
        {/* Existing code for adding new post */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: '20px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            padding: '10px',
            gap: '10px',
            border: '2px solid #eaeaea',
            borderRadius: '10px',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}>
            {/* Gallery Images */}
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
          }}>
            {/* Post Content */}
            {dataP.map((post, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'right',
                width: '60%',
                margin: '20px',
                padding: '15px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                borderRadius: '5px',
                backgroundColor: 'white',
              }}>
                <div style={{
                  alignSelf: 'flex-start',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}>
                  <img src={user.image} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                  <h3 style={{ margin: 2, color: '#1A202C' }}>{user.name}</h3>
                </div>
                <p style={{ fontWeight: 'bold', fontSize: '18px', textAlign: 'center', width: '100%', color: '#1A202C' }}>{post.title}</p>
                <img src={post.image} alt={post.title} style={{ maxWidth: '100%', height: 'auto', margin: '10px 0' }} />
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}>
                  <FaHeart
                    onClick={() => toggleLike(index)}
                    style={{ cursor: 'pointer', color: post.liked ? 'red' : 'black' }}
                  />
                  <input
                    placeholder='Comments'
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleCommentSubmit(post.id);
                    }}
                    style={{
                      width: '100%',
                      padding: '10px 15px',
                      fontSize: '16px',
                      border: '2px solid #E2E8F0',
                      borderRadius: '20px',
                      outline: 'none',
                      marginRight: '10px',
                      backgroundColor: '#F8FAFC',
                      color: '#1A202C',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#A0AEC0';
                      e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1), 0 0 0 3px rgba(66,153,225,0.5)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E2E8F0';
                      e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1)';
                    }}
                  />
                </div>
                <div>
                  {/* Render Comments */}
                  {comments[post.id] && comments[post.id].map((comment, index) => (
                    <div key={index} style={{ margin: '5px 0', fontSize: '14px', color: '#4A5568' }}>
                      <span style={{ fontWeight: 'bold' }}>{comment.user.name}:</span> {comment.content}
                      <button onClick={() => deleteComment(comment.id, post.id)} style={{ marginLeft: '10px', cursor: 'pointer', color: 'red', border: 'none', background: 'none', fontWeight: 'bold' }}>Delete</button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooTer />
    </div>
  );
}

export default Userprofile;
