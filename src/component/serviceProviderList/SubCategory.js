import React from 'react';
import { useState } from 'react';
import LikeButton from '../button/likeBtn';
import Chat from '../chat/chat';
import { FaTimes } from 'react-icons/fa';


const defaultData = {
    image: 'your_default_image_url',
    rating: '4.5',
    location: 'New York, USA',
    tag: 'Travel',
    phoneNumber: '123-456-7890',
};

const HorizontalCard = ({ data }) => {
    data = data || defaultData;

    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white rounded-lg  shadow-lg overflow-hidden flex border-slate-400 border-2 w-[70%]">
            <div className='h-52 w-52 m-5 border-slate-400 border-2'>
                {/* <img src={data.image} alt="Item" className="w-full h-40 object-cover" /> */}
            </div>{isOpen &&
                <div className='fixed left-[33.33%] top-[33.33%] '>
                    <button onClick={toggleChat}>< FaTimes /></button>
                    <Chat />
                </div>}
            <div className='position: relative left-[52%] '> <LikeButton /></div>
            <div className="w-3/5 p-4">
                <div className="text-2xl font-bold">{data.rating} Stars</div>
                <div className="text-lg mt-2">{data.location}</div>
                <div className='flex mt-2 '>
                    <div className="text-lg  m-1 border-slate-400 border-2 max-w-max p-1 rounded-lg">{data.tag}</div>
                    <div className="text-lg  m-1 border-slate-400 border-2 max-w-max p-1 rounded-lg">Plumbining</div>
                </div>
                <div className="flex items-center mt-4">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">Enquire</button>
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={toggleChat}>Chat</button>
                </div>
                <div className="text-lg mt-4 font-bold">Phone Number: {data.phoneNumber}</div>
            </div>
        </div>
    );
};

export default HorizontalCard;
