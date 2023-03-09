import React from 'react';

import { ReactComponent as FooterIconA } from '../assets/footer_icon_a.svg';
import { ReactComponent as FooterIconB } from '../assets/footer_icon_b.svg';
import { ReactComponent as FooterUnext } from '../assets/footer_unext.svg';

function Footer() {
  return (
    <footer className="lg:ml-[256px] bg-main-bg pb-6">
      <div
        className="flex flex-col justify-center items-center md_home:flex-row md_home:h-[244px]"
        style={{ backgroundColor: 'rgb(15, 25, 38)' }}
      >
        <div className="py-5 md_home:flex-1">
          <div className="flex justify-start items-center py-[10px] px-[55px]">
            <div
              className="pr-5 mr-5"
              style={{ borderRight: '1px solid rgba(255, 255, 255, 0.1)' }}
            >
              <FooterIconA className="w-[30px]" />
            </div>
            <div
              className=""
              style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '11px' }}
            >
              このエルマークは、レコード会社・映像製作会社が提供するコンテンツを示す登録商標です。RIAJ70024001
            </div>
          </div>
          <div
            className="flex justify-start items-center py-[10px] px-[55px]"
            style={{ backgroundColor: 'rgb(15, 25, 38)' }}
          >
            <div
              className="pr-5 mr-5"
              style={{ borderRight: '1px solid rgba(255, 255, 255, 0.1)' }}
            >
              <FooterIconB className="w-[30px]" />
            </div>
            <div
              className=""
              style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '11px' }}
            >
              ＡＢＪマークは、この電子書店・電子書籍配信サービスが、著作権者からコンテンツ使用許諾を得た正規版配信サービスであることを示す登録商標（登録番号第６０９１７１３号）です。詳しくは［ABJマーク］または［電子出版制作・流通協議会］で検索してください。
            </div>
          </div>
        </div>
        <div
          className="flex w-full md_home:w-[328px] md_home:h-full items-center justify-center pt-[40px]  pb-[80px] md_home:py-0 relative"
          style={{ backgroundColor: 'rgba(1, 6, 13, 0.3)' }}
        >
          <FooterUnext className="w-[127px]" />
          <div
            className="absolute bottom-8 w-full underline flex justify-center gap-6"
            style={{ fontSize: 15, color: 'rgba(255, 255, 255, 0.5)' }}
          >
            <a
              href="https://careers.unext.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              U-NEXT Careers
            </a>
            <a
              href="https://unext.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              コーポレート
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
