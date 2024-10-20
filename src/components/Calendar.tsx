'use client';

import { FC } from 'react';

const Calendar: FC = () => {
    return (
        <div className="shadow-md rounded-md text-neutral-100 bg-black p-6">
            <h3 className="text-white text-xl font-semibold mb-4">Google Calendar</h3>
            
            {/* Calendar Container */}
            <div className="overflow-hidden rounded-lg">
                <iframe 
                    src="https://calendar.google.com/calendar/embed?src=en-gb.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata" 
                    width="100%" 
                    height="600" 
                    className="filter invert w-full h-96 rounded-lg"
                    scrolling="no"
                    frameBorder="0"
                >
                </iframe>
            </div>
        </div>
    );
};

export default Calendar;
