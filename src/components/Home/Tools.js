import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
        const [tools, setTools] = useState([])

        useEffect(() => {
                fetch('https://young-badlands-79031.herokuapp.com/tool')
                        .then(res => res.json())
                        .then(data => setTools(data))
        }, [])
        return (
                <div>
                        <h2 className='text-3xl text-center m-10 font-bold'>Tools Collection</h2>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                                {
                                        tools.slice(0, 6).map(tool => <Tool
                                                key={tool._id}
                                                tool={tool}
                                        ></Tool>)
                                }
                        </div>
                </div>
        );
};

export default Tools;