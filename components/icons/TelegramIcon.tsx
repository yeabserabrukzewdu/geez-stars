
import React from 'react';

const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.243 6.343l-1.46 6.891c-.131.618-.5.772-1.002.48l-2.2-1.617-1.066 1.026c-.119.119-.219.219-.438.219l.159-2.245 4.145-3.753c.18-.159-.04-.249-.299-.08l-5.11 3.223-2.23-.696c-.618-.18-.636-.598.131-.877l8.411-3.273c.518-.18.966.119.814.798z" />
    </svg>
);

export default TelegramIcon;
