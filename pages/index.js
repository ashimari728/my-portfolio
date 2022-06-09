import Head from "next/head";
import hydrangea from "../images/hydrangea.jpg";
import yellow from "../images/yellow.png";
import blue from "../images/blue.png";
import orange from "../images/orange.png";
import skyblue from "../images/skyblue.png";
import aquamarin from "../images/aquamarin.png";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";

export default function Home() {
  return (
    <div className={styles.test}>
      <Head></Head>

      <Scroll to="nav">
        <div className={styles.homeContent}>
          <img className={styles.hydrangea} src={hydrangea.src} alt="紫陽花" />

          <h2 className={`${styles.animTypewriter} ${styles.pageTitle}`}>
            I wanna be like...
          </h2>
        </div>
      </Scroll>

      <nav id="nav">
        <ul className={styles.mainNav}>
          <li>
            <Scroll to="basicInformation">
              <img className={styles.paint} src={yellow.src} />
            </Scroll>
          </li>
          <li>
            <Scroll to="character">
              <img className={styles.paint} src={blue.src} />
            </Scroll>
          </li>
          <li>
            <Scroll to="skill">
              <img className={styles.paint} src={orange.src} />
            </Scroll>
          </li>
          <li>
            <Scroll to="weak">
              <img className={styles.paint} src={skyblue.src} />
            </Scroll>
          </li>
          <li>
            <Scroll to="hobby">
              <img className={styles.paint} src={aquamarin.src} />
            </Scroll>
          </li>
        </ul>
      </nav>

      <div id="basicInformation">
        <div className={styles.informationPaint}>
          <img
            className={styles.topPaint}
            src={yellow.src}
            alt="基本情報"
          ></img>
          <ul className={styles.centerContent}>
            <li>静岡大学情報学部行動情報学科</li>
            <li>名前　狩野花奈</li>
            <li>出身　静岡県静岡市</li>
            <li>星座　みずがめ座</li>
            <li>身長　168cm</li>
            <li>血液型　O型</li>
            <li>ロングスリーパー</li>
          </ul>
        </div>
      </div>

      <div id="character">
        <div className={styles.informationPaint}>
          <img className={styles.topPaint} src={blue.src} alt="性格"></img>
          <ul className={styles.centerContent}>
            <li>挑戦心がある</li>
            <li>飽き性</li>
            <li>好奇心旺盛</li>
            <li>出不精</li>
            <li>現在のMBTI　ENFP-T</li>
          </ul>
        </div>
      </div>

      <div id="skill">
        <div className={styles.informationPaint}>
          <img className={styles.topPaint} src={orange.src} alt="特技"></img>
          <ul className={styles.centerContent}>
            <li>ある程度の痛みに耐える</li>
            <li>冗談を言うこと</li>
            <li>仰向けから手を使わずに起き上がる</li>
            <li>採譜</li>
            <li>早起き</li>
            <li>キノピオ</li>
          </ul>
        </div>
      </div>

      <div id="weak">
        <div className={styles.informationPaint}>
          <img className={styles.topPaint} src={skyblue.src} alt="苦手"></img>
          <ul className={styles.centerContent}>
            <li>暑いところ</li>
            <li>ダンス</li>
            <li>大きい音</li>
            <li>プレゼントを選ぶこと</li>
            <li>携帯をなくさないこと</li>
            <li>SNS</li>
          </ul>
        </div>
      </div>

      <div id="hobby">
        <div className={styles.informationPaint}>
          <img className={styles.topPaint} src={aquamarin.src} alt="趣味"></img>
          <ul className={styles.centerContent}>
            <li>犬のアフレコ</li>
            <li>食べること</li>
            <li>クレープ巡り</li>
            <li>ピアノ</li>
            <li>読書</li>
            <li>歌を歌うこと</li>
          </ul>
        </div>
      </div>

      {/* </main> */}
    </div>
  );
}
