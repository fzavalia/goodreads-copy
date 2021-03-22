import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.sass";

const Header = () => {
  const [showBrowse, setShowBrowse] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);

  const browseMenuRef = useRef<HTMLDivElement>();
  const browseRef = useRef<HTMLDivElement>();

  const communityMenuRef = useRef<HTMLDivElement>();
  const communityRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const handle = (event) => {
      if (
        showBrowse &&
        !browseMenuRef.current.contains(event.target) &&
        !browseRef.current.contains(event.target)
      ) {
        setShowBrowse(false);
      }
    };

    document.addEventListener("mousedown", handle);

    return () => document.removeEventListener("mousedown", handle);
  }, [showBrowse]);

  useEffect(() => {
    const handle = (event) => {
      if (
        showCommunity &&
        !communityMenuRef.current.contains(event.target) &&
        !communityRef.current.contains(event.target)
      ) {
        setShowCommunity(false);
      }
    };

    document.addEventListener("mousedown", handle);

    return () => document.removeEventListener("mousedown", handle);
  }, [showCommunity]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.firstRow}>
          <span>
            <img
              className="h-5 ml-4 w-6"
              src="https://www.goodreads.com/assets/layout/header/icn_nav_search_black.svg"
            />
          </span>
          <span className="text-center">
            <img
              className="h-7"
              src="https://www.goodreads.com/assets/layout/header/goodreads_logo.svg"
            />
          </span>
          <span className="text-right">
            <img
              className="h-8 rounded-full border-2 mr-4"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1615778541i/113470954._UY60_CR10,0,60,60_.jpg"
            />
          </span>
        </div>
        <div className={styles.secondRow}>
          <div>My Books</div>
          <div ref={browseRef} onClick={() => setShowBrowse(!showBrowse)}>
            Browse ▾
          </div>
          <div
            ref={communityRef}
            onClick={() => setShowCommunity(!showCommunity)}
          >
            Community ▾
          </div>
        </div>
      </header>
      {showBrowse && (
        <div ref={browseMenuRef} className={styles.menu}>
          <a>Recommendations</a>
          <a>Choice Awards</a>
          <a>Genres</a>
          <a>Giveaways</a>
          <a>New Releases</a>
          <a>Lists</a>
          <a>Explore</a>
          <a>News & Interviews</a>
        </div>
      )}
      {showCommunity && (
        <div ref={communityMenuRef} className={styles.menu}>
          <a>Groupd</a>
          <a>Discussions</a>
          <a>Quotes</a>
          <a>Ask the Author</a>
          <a>Trivia</a>
          <a>Quizes</a>
          <a>Creative Writing</a>
          <a>People</a>
          <a>Events</a>
        </div>
      )}
    </>
  );
};

export default Header;
