import React from 'react';

const widths = ['85%', '60%', '75%', '90%', '55%', '70%', '80%', '65%', '88%', '50%'];

const FeedEntryPlaceholder = () => (
    <div className="skeletonList">
        {widths.map((w, i) => (
            <div key={i} className="skeletonLine" style={{ width: w }} />
        ))}
    </div>
);

export default FeedEntryPlaceholder;
