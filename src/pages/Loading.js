import React from 'react';
import ContentLoader from "react-content-loader";

function Loading() {
  return (
    <div>
      <ContentLoader speed={4} primaryColor="#f3f3f3" secondaryColor="#ecebeb">
        <rect x="120" y="50" rx="5" ry="5" width="150" height="12" />
        <rect x="150" y="70" rx="5" ry="5" width="80" height="8" />
        <circle cx="170" cy="100" r="12" />
        <circle cx="210" cy="100" r="12" />
    </ContentLoader>
    </div>
  );
}

export default Loading;
