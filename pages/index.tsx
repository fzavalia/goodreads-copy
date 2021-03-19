export default function Home() {
  return <Header />;
}

const Header = () => {
  return (
    <header style={{ backgroundColor: "#f4f1ea" }} className="header">
      <div className="flex w-full h-12 items-center shadow-md">
        <span className="flex-1">
          <img
            className="h-5 inline-block ml-4 w-6 cursor-pointer"
            src="https://www.goodreads.com/assets/layout/header/icn_nav_search_black.svg"
          />
        </span>
        <span className="flex-1 text-center">
          <img
            className="h-7 inline-block cursor-pointer"
            src="https://www.goodreads.com/assets/layout/header/goodreads_logo.svg"
          />
        </span>
        <span className="flex-1 text-right mr-4">
          <img
            className="h-8 inline-block rounded-full border-2 cursor-pointer"
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1615778541i/113470954._UY60_CR10,0,60,60_.jpg"
          />
        </span>
      </div>
    </header>
  );
};
