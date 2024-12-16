import { io } from 'socket.io-client';

const SOCKET_TIMEOUT = 10000; // Define a constant for the timeout value

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: Infinity, // Correct property name and value type
        timeout: SOCKET_TIMEOUT, // Use the constant
        transports: ['websocket'],
    };
    return io(process.env.REACT_APP_BACKEND_URL, options);
};
