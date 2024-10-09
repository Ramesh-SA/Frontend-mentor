"use client"
import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Logos } from '@/configs/AppConfig';



const ProfileDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Handle clicking outside the dropdown to close it
    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            // Ensure containerRef is current and the click was outside the element
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        // Convert handleClickOutside to type any to satisfy the event listener type requirement
        document.addEventListener("mousedown", handleClickOutside as never);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside as never);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative">
            <button onClick={() => setIsOpen(!isOpen)}>
            <Avatar className="avatar">
            <AvatarImage src={Logos.profile} className='object-cover file:object-top cursor-pointer' />
           
          </Avatar>
            </button>
            {isOpen && (
                <div className="absolute z-10 mt-2 p-4 bg-white shadow-lg rounded-lg">
                    <div>Cristiano Ronaldo</div>
                    <div>Footballer</div>
                    {/* Additional profile details */}
                </div>
            )}
        </div>
    );
}

export default ProfileDropdown;
