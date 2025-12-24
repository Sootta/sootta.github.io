import "./introduce.css"


export const SelfIntroduction = () => {
  return (
    <section className="intro">
      <h1 className="intro-title">自己紹介</h1>
      <p className="intro-text">
        新居浜工業高等専門学校 電子制御工学科3年生です。
      <br />
        ロボコン2025に出場し、制御チームとして活動していました。
      </p>

      <p className="intro-text">
        これまでに <strong>ESP32</strong> や <strong>STM32</strong> を用いた組み込み開発を行い、
        CAN通信やモータ制御、センサ処理などを中心に取り組んできました。
        制御・モデリング分野に特に興味があります。
      </p>

      <p className="intro-text">
        最近はソフトウェア領域にも力を入れており、
        <strong>React</strong> を用いたフロントエンド開発と、
        <strong>Go</strong> によるバックエンド開発を学習中です。
        ロボットとWebをつなぐ仕組みにも関心があります。
      </p>

      <p className="intro-text">
        ものづくりと制御を軸に、ハードウェアとソフトウェアの両方を理解できるエンジニアを目指しています。
      </p>
    </section>
  );
}

