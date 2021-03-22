import React, { useRef, useState } from "react";
import styles from "./header.module.sass";
import Menu from "../menu/menu";

const browseItems = [
  "Recommendations",
  "Choice Awards",
  "Genres",
  "Giveaways",
  "New Releases",
  "Lists",
  "Explore",
  "Lists",
  "News & Interviews",
];

const communityItems = [
  "Groups",
  "Discussions",
  "Quotes",
  "Ask the Author",
  "Trivia",
  "Quizes",
  "Creative Writing",
  "People",
  "Events",
];

const Header = () => {
  const [showBrowse, setShowBrowse] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);

  const browseRef = useRef<HTMLDivElement>();
  const communityRef = useRef<HTMLDivElement>();

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
      <Menu
        show={showBrowse}
        button={browseRef}
        onClose={() => setShowBrowse(false)}
        items={browseItems}
      />
      <Menu
        show={showCommunity}
        button={communityRef}
        onClose={() => setShowCommunity(false)}
        items={communityItems}
      />
    </>
  );
};

export default Header;
