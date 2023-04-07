import Image from "next/image";
export default function Home() {
  return (
    <div className="grid p-6">
      <div>
        <h1 className="m_h1">CLVX 1 is a mechanical scissors keyboard</h1>
      </div>
      <p className="mb-4 text-[1.25rem] leading-[2rem]">
        Clevetura LTD is a design house focused on a development of TouchOnKeys®
        technology and products with it.
      </p>{" "}
      <p className="mb-4 text-[1.25rem] leading-[2rem]">
        Headquarter is located in Limassol, Cyprus with offices in Shenzhen and
        Minsk. Clevetura was founded in 2017 and develops TouchOnKeys from the
        beginning until now and beyond.
      </p>
    </div>
  );
}