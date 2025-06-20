import React, { useState } from 'react';

const ApiDatafetch = () => {
    const [apidata, setApidata] = useState([]);

    const fetchArtworks = () => {
        fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=100')
            .then((res) => res.json())
            .then((data) => setApidata(data.data))
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <button onClick={fetchArtworks} className='bg-blue-600 text-white p-2 rounded m-4'>
                Load Artworks
            </button>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    apidata.map((art) => (
                        <div key={art.id} className='bg-stone-300 w-[250px] h-auto m-4 p-4 rounded shadow'>
                            <h3 className='font-bold text-lg mb-2'>{art.title}</h3>
                            <p><strong>Artist:</strong> {art.artist_title || 'Unknown'}</p>
                            <p><strong>Date:</strong> {art.date_display}</p>
                            <p><strong>Medium:</strong> {art.medium_display}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ApiDatafetch;
