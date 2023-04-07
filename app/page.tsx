import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="wrap lr_section">
        <div className="media"></div>
        <div className="content">
          <div>
            <span className="mark">
              In development
            </span>
            <div className="h2">Clevetura LTD</div>
            <p>
              Clevetura LTD is a design house focused on a development of
              TouchOnKeys® technology and products with it.{" "}
            </p>
            <p>
              Headquarter is located in Limassol, Cyprus with offices in
              Shenzhen and Minsk. Clevetura was founded in 2017 and develops
              TouchOnKeys from the beginning until now and beyond.
            </p>
            <Link href="/" className="video_link">
              <span className="icon">
                <Image
                  src="/icon-video.svg"
                  alt="video"
                  width={20}
                  height={16}
                />
              </span>
              <span className="anchor">
                Take a look inside CLVX 1 key with Clevetura mechanical engineer
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="wrap lr_section">
        <div className="lg:order-last media"></div>
        <div className="content lg:order-first">
          <div>
            <div className="h2">Clevetura LTD</div>
            <p>
              Clevetura LTD is a design house focused on a development of
              TouchOnKeys® technology and products with it.{" "}
            </p>
            <p>
              Headquarter is located in Limassol, Cyprus with offices in
              Shenzhen and Minsk. Clevetura was founded in 2017 and develops
              TouchOnKeys from the beginning until now and beyond.
            </p>
          </div>
        </div>
      </div>

      {/*
      <h1>
        CLVX 1 is a mechanical scissors keyboard
      </h1>
      <p>
        Clevetura LTD is a design house focused on a development of TouchOnKeys®
        technology and products with it.
      </p>
      <ul>
        <li>Key travel distance 1.2mm — great for laptop keyboard lovers</li>
        <li>Quite, tactile and low-profile</li>
        <li>Standard keys layout — easy to switch</li>
      </ul>
      <Link href="/" className="video_link">
        <span className="icon">
          <Image src="/icon-video.svg" alt="video" width={20} height={16} />
        </span>
        <span className="anchor">
          Take a look inside CLVX 1 key with Clevetura mechanical engineer
        </span>
      </Link>
      <h2>
        CLVX 1 is a mechanical scissors keyboard
      </h2>
      <p>
        Clevetura LTD is a design house focused on a development of TouchOnKeys®
        technology and products with it.
      </p>
      <p>
        Headquarter is located in Limassol, Cyprus with offices in Shenzhen and
        Minsk. Clevetura was founded in 2017 and develops TouchOnKeys from the
        beginning until now and beyond.
      </p>

      <h3>CLVX 1 is a mechanical scissors keyboard</h3>

      <p>
        Clevetura LTD is a design house focused on a development of TouchOnKeys®
        technology and products with it. Headquarter is located in Limassol,
        Cyprus with offices in Shenzhen and Minsk. Clevetura was founded in 2017
        and develops TouchOnKeys from the beginning until now and beyond.
      </p>
      <h4>CLVX 1 is a mechanical scissors keyboard</h4>

      <p>
        Clevetura LTD is a design house focused on a development of TouchOnKeys®
        technology and products with it. Headquarter is located in Limassol,
        Cyprus with offices in Shenzhen and Minsk. Clevetura was founded in 2017
        and develops TouchOnKeys from the beginning until now and beyond.
      </p>
  */}
    </div>
  );
}
