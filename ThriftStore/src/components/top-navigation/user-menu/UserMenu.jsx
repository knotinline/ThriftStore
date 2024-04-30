import React, { useState } from 'react';
import { BsEmojiWink } from "react-icons/bs";

const UserMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="relative inline-block">
            <div
                onMouseEnter={handleMenuOpen}
                onMouseLeave={handleMenuClose}
            >
                <button>
                    <BsEmojiWink className="w-9 h-9" />
                </button>
                {/* User menu */}
                {isMenuOpen && (
                    <div className="absolute right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <div className="py-1">
                            {/* Menu items */}
                            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Log out
                            </button>
                            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Account Details
                            </button>
                            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Messages
                            </button>
                            {/* Add more menu items as needed */}
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
};

export default UserMenu;