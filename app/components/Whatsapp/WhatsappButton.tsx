import React from 'react';
import Link from 'next/link';
import { FaCommentDots } from 'react-icons/fa';
import './WhatsAppButton.css';

const number = '+610421561785';

const ChatButton = () => {
  return (
    <Link href={`tel:${number}`} className="chat-button">
      <FaCommentDots className="chat-icon" />
    </Link>
  );
};

export default ChatButton;
