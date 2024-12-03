import { el } from "../helper.js";

// 동기방식
export const include = () => {
  el(".header").innerHTML = /* html*/ `
  <div class="header__wrap">
        <h1>
          <a href=""><img src="./images/logo.svg" alt="Rebehayan Learning Platform" /></a>
        </h1>
        <nav class="gnb">
          <ul>
            <li>
              <a href="">Rebehayan</a>
              <div class="depth2">
                <ul>
                  <li><a href="">멘토</a></li>
                  <li><a href="">멘티</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">배움라운지</a>
              <div class="depth2">
                <ul>
                  <li><a href="">콘텐츠 라운지</a></li>
                  <li><a href="">DIY 라운지</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">인(in)맥</a>
              <div class="depth2">
                <ul>
                  <li><a href="">Mentoring</a></li>
                  <li><a href="">Connecting </a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">커뮤니티</a>
              <div class="depth2">
                <ul>
                  <li><a href="">공지 Talk</a></li>
                  <li><a href="">자유 Talk</a></li>
                  <li><a href="">CEO Talk</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <div class="profile">
          <div class="profile__name"><strong>하성필님</strong> 안녕하세요!</div>
          <button class="avatar">
            <img src="./images/@avatar.png" alt="" />
          </button>
        </div>
      </div>
  `;
  // header 이벤트를 여기서 실행해야함. 그래서 이 방법은 추천안함

  el(".footer").innerHTML = /* html */ `
   <div class="footer__top">
        <div>
          <nav>
            <ul class="footer-nav">
              <li><a href="">법적고지</a></li>
              <li><a href="">영상정보처리기기운영/관리방침</a></li>
              <li><a href="">이용약관</a></li>
              <li><a href="">이메일무단수집거부 </a></li>
              <li><a href="">찾아오시는길</a></li>
            </ul>
          </nav>
          <button class="btn-family">
            <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="1.25586" width="25.8223" height="26.2461" stroke="#E1E1E1" />
              <path d="M14.3545 13.4287H16.8223V15.2129H14.3545V18.002H12.4746V15.2129H10V13.4287H12.4746V10.7559H14.3545V13.4287Z" fill="#666666" />
            </svg>
            FAMILY SITE
          </button>
        </div>
      </div>
      <div class="footer__bottom">
        <div>
          <ul class="company-list">
            <li><strong>Rebehayan</strong><span> : 서울시 서초구 871-13</span></li>
            <li><strong>Rebehayan 교육</strong><span> : 서울시 마포구 68</span></li>
            <li><strong>대표이사</strong><span> : 하성필</span></li>
            <li><strong>사업자등록번호</strong><span> : 741-81-51510</span></li>
          </ul>
          <div class="footer__copyright">&copy; Rebehayan. All Rights Reserved.</div>
        </div>
      </div>
  `;
};
