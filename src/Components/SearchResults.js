import React from 'react';
import '../Styling/SearchResults.css';
import TrackList from './TrackList';


function SearchResults() {
  return (
    <div className="SearchResults">
        <h2>Results</h2>
        <TrackList />
    </div>
  );
}

export default SearchResults;