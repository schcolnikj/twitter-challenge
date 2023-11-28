import { io } from "socket.io-client";

import React, { useEffect, useState } from 'react'
import { useAppSelector } from "../redux/hooks";
import { Socket } from "socket.io";

interface EmitProps {
    to: string,
    message: string
}

export const useSocket = () => {
    const [isConnected, setIsConnected] = useState(false);
    const token = (localStorage.getItem('token'))?.split(' ')[1]; //Le sacamos el Bearer
    const username = useAppSelector((state) => state.user.user.username)
    const userId = useAppSelector((state) => state.user.user.id)
    // console.log(userId);
    
    const socket = io('http://localhost:8080', {
        auth: {
            token: token,
            userId: userId
        }
    });

    useEffect(() => {

        socket.on('connect', () => {
            setIsConnected(true);
        });
       

        socket.on('connect_error', (error) => {
            console.error('Connection error:', error);
        });
        
    }, [])

    useEffect(() => {
        console.log(isConnected);
    }, [isConnected]);


    const emit = ({to, message}: EmitProps) => {
        const send = socket.emit('msg_from_client', ({from: userId, to, message}));
        console.log({targetId: to, userId, to, message});
        console.log(send);
        
      }     
    return {emit}
}
    