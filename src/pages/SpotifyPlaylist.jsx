import React from 'react'
import { useNavigate } from 'react-router-dom';

import LetterPage from '../components/LetterPage'

const letterContent = `
Hi Baby,
I made a playlist of songs that when I listen to it I think of us and all the good times we've had together. Hope you like it.
`;

const SpotifyPlaylist = () => {
  const navigate = useNavigate();

  return (
    <>
      <LetterPage
        content={letterContent}
        extraOptions={
          <div className="spotify-container">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/4GWDC3sCdDQnGP7iK8fEeb?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        }

        buttonOption={
          <div className="button-container">
            <button className="nav-button" onClick={() => navigate('/my-letter-to-you')}>{"<- Go Back"}</button>
          </div>
        }
      />
    </>
  )
}

export default SpotifyPlaylist