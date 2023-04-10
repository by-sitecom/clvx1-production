import { fetchAPI } from "@/lib/client/graphql-client";
import { About } from "@/lib/components/About/About";
import { ChartSection } from "@/lib/components/ChartSection/ChartSection";
import { Design } from "@/lib/components/Design/Design";
import { Footer } from "@/lib/components/Footer/Footer";
import { RoadMap } from "@/lib/components/RoadMap/RoadMap";
import { Specification } from "@/lib/components/Specification/Specification";
import { Team } from "@/lib/components/Team/Team";
import { Technology } from "@/lib/components/Technology/Technology";
import { GET_PAGE } from "@/lib/querys/get-page";
import { IPage } from "@/types/page.interface";

export default async function Home() {
  const data: IPage = await fetchAPI(GET_PAGE, {});
  console.log(data.design.properties_design.designVideos);
  return (
    <>
      <Design
        title={data.design.properties_design.designTitle}
        content={data.design.properties_design.designDescription}
        gallery={data.design.properties_design.designGallery}
        featuresTitle={data.design.properties_design.designFeaturesTitle}
        features={data.design.properties_design.designFeatures}
        videos={data.design.properties_design.designVideos}
      />
      <Technology
        title={data.technology.properties_technology.technologyTitle}
        content={data.technology.properties_technology.technologyDescription}
        technologyImage={data.technology.properties_technology.technologyImage}
        videoAnchor={
          data.technology.properties_technology.technologyAnchorVideo
        }
        videoUrl={data.technology.properties_technology.technologyVideoUrl}
      />
      <ChartSection title="What CLVX 1 could" />
      <RoadMap
        title={data.roadmap.properties_roadmap.roadmapTitle}
        content={data.roadmap.properties_roadmap.roadmapDescription}
        roadMap={data.roadmap.properties_roadmap.roadmap}
        gallery={data.roadmap.properties_roadmap.roadmapGallery}
      />
      <Specification
        title={data.specification.properties_specification.specificationTitle}
        content={
          data.specification.properties_specification.specificationDescription
        }
        specification={
          data.specification.properties_specification.specificationGroup
        }
      />
      <About
        title={data.company.properties_company.companyTitle}
        content={data.company.properties_company.companyDescription}
        companyImage={data.company.properties_company.companyImage}
        companyAwards={data.company.properties_company.companyAwards}
      />
      <Team
        title={data.team.properties_team.teamTitle}
        content={data.team.properties_team.teamDescription}
        teamList={data.team.properties_team.teamList}
      />
      {/*
      <Team
        title={data.team.properties_team.teamTitle}
        content={data.team.properties_team.teamDescription}
        teamList={data.team.properties_team.teamList}
      />
      */}

      {/*<Footer socialMedia={data.footer.properties_footer.socialMedia} />*/}

      {/*
      <div className="wrap lr_section">
        <div className="media"></div>
        <div className="content">
          <div>
            <div className="h2">CLVX 1 is a mechanical scissors keyboard</div>
            <ul>
              <li>
                Key travel distance 1.2mm — great for laptop keyboard lovers
              </li>
              <li>Quite, tactile and low-profile</li>
              <li>Standard keys layout — easy to switch</li>
            </ul>
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
        <div className="media lg:order-last"></div>
        <div className="content lg:order-first">
          <div>

            <span className="mark">In development</span>
           
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
    </>
  );
}
