import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
        <div className="bg-gray-100 px-6 py-3 md:px-9 md:py-6 xl:col-span-2 xxl:px-12 xxl:py-8">
          <div>
            <div className="h2">Clevetura LTD</div>
            <p>
              Clevetura LTD is a design house focused on a development of
              TouchOnKeys® technology and products with it. Headquarter is
              located in Limassol, Cyprus with offices in Shenzhen and Minsk.
              Clevetura was founded in 2017 and develops TouchOnKeys from the
              beginning until now and beyond.
            </p>
          </div>
        </div>
        <div className="relative bg-gray-400 xl:col-span-3 portrait:min-h-[50vh] landscape:min-h-screen"></div>
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
