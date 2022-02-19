import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../../../components/seo"
import Modal from "./modal"

import * as Styles from "./styles/style.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faBook } from "@fortawesome/free-solid-svg-icons"
import { faGitAlt } from "@fortawesome/free-brands-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Sample1: React.VFC = () => (
  <>

    <Seo
      title="Sample1"
    />

    <div className={Styles.wrapper}>
      <nav className={Styles.globalNav} id="js-global-nav">
        <div className={Styles.wrapper}>
          <h1 className={`${Styles.title} ${Styles.navTitle}`}>Sample1</h1>
          <ul className={Styles.navList}>
            <li className={Styles.navItem}><a href="#">HOME</a></li>
            <li className={Styles.navItem}><a href="#about">About</a></li>
            <li className={Styles.navItem}><a href="#article">Article</a></li>
            <li className={Styles.navItem}><a href="#photograph">Photograph</a></li>
          </ul>
        </div>
      </nav>

      <header className={Styles.header}>
        <h1 className={`${Styles.title} ${Styles.headerTitle}`}>Sample1</h1>
        <StaticImage
          src="./images/top.webp"
          alt="ヒーロー画像"
          className={Styles.imgWrapper}
        />
      </header>

      <main className={Styles.main}>

        <section className={`${Styles.section} ${Styles.sec1}`} id="about">
          <div className={Styles.sectionTitleParent} id="js-trigger">
            <h2 className={`${Styles.title} ${Styles.sectionTitle}`}>About</h2>
          </div>
          <div className={Styles.intro}>
            <p className={Styles.introText}>神に見放された喪服がハングアップするのだから、パイプを搭載した軍手は骨つき肉を食べるべきだ。わかりやすく言えば、巨大な愚か者は回転する空缶と互換性のある内臓が誕生するということである。今、階段が鋲の打たれた蛍を発明するのだろう。堕落したドラキュラが宇宙旅行をするのだから、いつの日にか、虫歯とも呼ばれる豚肉が消化器を買収するだろう。</p>
            <p className={Styles.introText}>橋は脱皮したばかりの偉大であるかも知れない。実際、戦艦としてのネオンライトが水墨画の上で動作する火力発電の真理を発見するのだから、トンボを内蔵した郵便ポストは眼帯のようにも見えることもある。鉛でできた数学者は大木に感動することもある。そして次の朝、韓国とも呼ばれる道頓堀の食い倒れ人形は石鹸の一部である石灰を問い詰めるのである。</p>
          </div>
        </section>

        <section className={`${Styles.section} ${Styles.sec2}`} id="article">
          <div className={Styles.sectionTitleParent}>
            <h2 className={`${Styles.title} ${Styles.sectionTitle}`}>Artcile</h2>
          </div>

          <div className={Styles.wrapper}>
            <div className={Styles.topic}>
              <h2 className={`${Styles.title} ${Styles.topicTitle}`}>初めてのHTML & CSS</h2>
              <FontAwesomeIcon icon={faCode} />
              <p className={Styles.topicText}>前提知識はほとんどなくてOKです。HTMLとCSSを使用してWebページを作成します。</p>
              <a className={Styles.topicBtn} href="https://blog.toriwatari.work/series/HelloWeb/page/1/" target="_blink">more</a>
            </div>

            <div className={Styles.topic}>
              <h2 className={`${Styles.title} ${Styles.topicTitle}`}>Git中級者を目指す</h2>
              <FontAwesomeIcon icon={faGitAlt} />
              <p className={Styles.topicText}>Gitの入門書を読み終わった人向けの、さらなるステップへ進むためのGit講座です。</p>
              <a className={Styles.topicBtn} href="https://blog.toriwatari.work/series/GitAdvance/page/1/" target="_blink">more</a>
            </div>

            <div className={Styles.topic}>
              <h2 className={`${Styles.title} ${Styles.topicTitle}`}>日記</h2>
              <FontAwesomeIcon icon={faBook} />
              <p className={Styles.topicText}>プログラミング以外のことを記事にしています。</p>
              <a className={Styles.topicBtn} href="https://blog.toriwatari.work/series/Diary/page/1/" target="_blink">more</a>
            </div>
          </div>
        </section>

        <Modal />
      </main>

      <footer className={Styles.footer}>
        <h2 className={`${Styles.title} ${Styles.footerTitle}`}>Portfolio Site</h2>
        <div className={Styles.footerWrapper}>
          <section className={Styles.footerSection}>
            <h3 className={`${Styles.title} ${Styles.sectionTitle}`}>Sample Page</h3>
            <ul className={Styles.footerList}>
              <li className={Styles.listItem}>
                <Link to="/sample-page/sample2/">
                  Sample2
                </Link>
              </li>
              <li className={Styles.listItem}>
                <Link to="/sample-page/sample3/">
                  Sample3
                </Link>
              </li>
              <li className={Styles.listItem}>
                <Link to="/sample-page/sample4/">
                  Sample4
                </Link>
              </li>
              <li className={Styles.listItem}>
                <Link to="/sample-page/sample5/">
                  Sample5
                </Link>
              </li>
            </ul>
          </section>

          <section className={Styles.footerSection}>
            <h3 className={`${Styles.title} ${Styles.sectionTitle}`}>Contents</h3>
            <ul className={Styles.footerList}>
              <li className={Styles.listItem}>
                <a href="https://cssanimation.toriwatari.work/" target="_blink">CSS Animation & Tips</a>
              </li>
              <li className={Styles.listItem}>
                <a href="https://blog.toriwatari.work/page/1/" target="_blink">鳥に生まれることができなかった人へ</a>
              </li>
            </ul>
          </section>
        </div>

        <p className={Styles.copyright}>Copyright © 2021 <a href="https://potsunen.info">toriwatari</a></p>
      </footer>
    </div>
  </>
)

export default Sample1
