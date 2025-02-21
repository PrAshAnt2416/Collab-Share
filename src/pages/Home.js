/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };

    const span1 = '<span style="--i:11;"></span><span style="--i:12;"></span><span style="--i:21;"></span><span style="--i:29;"></span><span style="--i:26;"></span><span style="--i:28;"></span><span style="--i:17;"></span><span style="--i:27;"></span><span style="--i:18;"></span><span style="--i:26;"></span><span style="--i:19;"></span><span style="--i:24;"></span><span style="--i:12;"></span><span style="--i:21;"></span><span style="--i:15;"></span><span style="--i:11;"></span></span><span style="--i:24;"></span><span style="--i:12;"></span><span style="--i:21;"></span><span style="--i:15;"></span><span style="--i:11;"></span><span style="--i:11;"></span><span style="--i:28;"></span><span style="--i:17;"></span><span style="--i:27;"></span><span style="--i:18;"></span><span style="--i:26;"></span><span style="--i:19;"></span><span style="--i:24;"></span><span style="--i:12;"></span><span style="--i:21;"></span><span style="--i:15;"></span><span style="--i:11;"></span><span style="--i:12;"></span><span style="--i:21;"></span><span style="--i:15;"></span><span style="--i:11;"></span><span style="--i:11;"></span><span style="--i:12;"></span><span style="--i:21;"></span><span style="--i:29;"></span><span style="--i:24;"></span><span style="--i:12;"></span><span style="--i:21;"></span><span style="--i:15;"></span><span style="--i:11;"></span><span style="--i:11;"></span><span style="--i:29;"></span><span style="--i:26;"></span><span style="--i:28;"></span><span style="--i:21;"></span><span style="--i:29;"></span><span style="--i:26;"></span><span style="--i:28;"></span><span style="--i:17;"></span><span style="--i:27;"></span><span style="--i:15;"></span><span style="--i:11;"></span><span style="--i:11;"></span><span style="--i:12;"></span><span style="--i:21;"></span><span style="--i:29;"></span><span style="--i:26;"></span><span style="--i:28;"></span><span style="--i:12;"></span><span style="--i:21;"></span><span style="--i:15;"></span><span style="--i:11;"></span><span style="--i:12;"></span><span style="--i:21;"></span><span style="--i:15;"></span><span style="--i:11;"></span>';

    return (
        <div className='container'>
            <div className='bubbles' dangerouslySetInnerHTML={{__html: span1}}>
                
                

                </div>
        <div className="homePageWrapper">
        
            <div className="formWrapper">
                
            
                <h4 className="mainLabel">Paste invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        No Room No Problem, Just Create One ➩ &nbsp;
                        <a
                            onClick={createNewRoom}
                            href=""
                            className="createNewBtn"
                        >
                            New Room
                        </a>
                    </span>
                </div>
            </div>
            <footer>
                <h4 className='footerText'>
                    Prashant | 2023
                </h4>
            </footer>
            
        </div>
        </div>
    );
};

export default Home;
