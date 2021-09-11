import React from 'react';
import './Twitter.css';
import { Link } from 'react-router-dom'



let isLoadwidgets = false;
export const Twitter = () => {
  React.useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);
  return (
    <div className="twitter">
      <a 
      className="twitter-timeline" 
      data-chrome="noheader nofooter noborders noscrollbar" 
      data-lang="ja" 
      data-height="400" 
      href="https://twitter.com/tumugi3205?ref_src=twsrc%5Etfw">
        </a> 
    </div>
  );
};
export default Twitter;