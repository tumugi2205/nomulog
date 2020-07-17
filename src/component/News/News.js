import React from 'react';
import './News.css';
import { Link } from 'react-router-dom'

function News(){
    return(
      <div className="news">
        <div className="news__title">News</div>
        <div className="news__body">
          <li className="release"><span className="time">2020.07.17</span><span className="summary">NomuLog v0.0.2を公開しました。ページは順次追加予定です。</span></li>
          <li className="blog"><span className="time">2020.06.09</span><span className="summary">ビルドしたファイルたちをS3にデプロイするコマンドを作ってみたよ</span></li>
          <li className="blog"><span className="time">2020.06.08</span><span className="summary">ブログ的なの作ってみたよ</span></li>
          <li className="release"><span className="time">2020.06.08</span><span className="summary">NomuLog v0.0.1を開設しました。</span></li>
        </div>
      </div>
    )
}

export default News;
