'use client';

import {useState} from 'react';

interface Item {
    title: string;
    content: string;
}

interface AccordionProps {
    items: Item[];
    allowMultipleOpen?: boolean;
}

export const Accordion = ({items, allowMultipleOpen = false}: AccordionProps) => {

    const [activeIndex, setActiveIndex] = useState<number[]>([]);

    const toggleItem = (index: number) => {

        if (allowMultipleOpen) {

            setActiveIndex((prevActiveIndex) => {

                if (prevActiveIndex.includes(index)) {

                    return prevActiveIndex.filter((i) => i !== index);

                } else {
                    return [...prevActiveIndex, index];
                }
            });
        } else {
            setActiveIndex((prevActiveIndex) => prevActiveIndex.includes(index) ? [] : [index]);
        }
    };

    return (
        <div className="border rounded-md divide-y divide-gray-200">
            {
                items.filter((item) => item.content?.trim() !== '')
                    .map((item, index) => (
                        <div key={index} >
                            <button onClick={() => toggleItem(index)} className="rounded-md w-full text-left px-4 py-2 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer ">
                                {item.title}
                            </button>
                            {
                                activeIndex.includes(index) && <div className="p-4">{item.content}</div>
                            }
                        </div>
                    ))
            }
        </div>
    )
}