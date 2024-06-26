import MainLayout from "@/layouts/main/nav/MainLayout";
import Seo from "@/componants/Seo";
import { useRouter } from "next/router";
import { Col, Container, Dropdown, Nav, Row } from "react-bootstrap";
// import { useState } from "react";
import LiveDealCard from "@/componants/LiveDealCard";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import CommunirySideList from "@/componants/communirySideList";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

ProjectDetails.getLayout = (page) => (
  <MainLayout isonlyTop={true}>{page}</MainLayout>
);

const liveDealsData = [
  {
    imageSrc: "/img/card1.png",
    tags: [
      { label: "IDO", color: "blue" },
      { label: "Refundable", color: "green" },
      { label: "KYC", color: "yellow" },
    ],
    author: { username: "Libera", avatar: "/img/lix.png" },
    likedCount: 34,
    title: "Dirac Finance",
    pair: "DIRAC / USDT",
    content: "Dirac Finance is a DeFi protocol enabling any LP...",
    progress: { label: "Current Crowdsale Period", percentage: "0%" },
    raiseAmount: "$40.2M",
    contributeChain: { name: "BNB", icon: "/img/BNB.png" },
    distributeChain: { name: "POLYGON", icon: "/img/POLYGON.png" },
    isLive: true,
    dealEndsIn: "8d 16h 49m 48s",
    startIn: 0,
  },
  {
    imageSrc: "/img/card1.png",
    tags: [
      { label: "IDO", color: "blue" },
      { label: "Refundable", color: "green" },
      { label: "KYC", color: "yellow" },
    ],
    author: { username: "Libera", avatar: "/img/lix.png" },
    likedCount: 34,
    title: "Dirac Finance",
    pair: "DIRAC / USDT",
    content: "Dirac Finance is a DeFi protocol enabling any LP...",
    progress: { label: "Current Crowdsale Period", percentage: "23.76%" },
    raiseAmount: "$40.2M",
    contributeChain: { name: "BNB", icon: "/img/BNB.png" },
    distributeChain: { name: "POLYGON", icon: "/img/POLYGON.png" },
    isLive: true,
    dealEndsIn: "8d 16h 49m 48s",
    startIn: 1,
  },
  {
    imageSrc: "/img/card1.png",
    tags: [
      { label: "IDO", color: "blue" },
      { label: "Refundable", color: "green" },
      { label: "KYC", color: "yellow" },
    ],
    author: { username: "Libera", avatar: "/img/lix.png" },
    likedCount: 34,
    title: "Dirac Finance",
    pair: "DIRAC / USDT",
    content: "Dirac Finance is a DeFi protocol enabling any LP...",
    progress: { label: "Current Crowdsale Period", percentage: "23.76%" },
    raiseAmount: "$40.2M",
    contributeChain: { name: "BNB", icon: "/img/BNB.png" },
    distributeChain: { name: "POLYGON", icon: "/img/POLYGON.png" },
    isLive: true,
    dealEndsIn: "8d 16h 49m 48s",
    startIn: 1,
  },
  {
    imageSrc: "/img/card1.png",
    tags: [
      { label: "IDO", color: "blue" },
      { label: "Refundable", color: "green" },
      { label: "KYC", color: "yellow" },
    ],
    author: { username: "Libera", avatar: "/img/lix.png" },
    likedCount: 34,
    title: "Dirac Finance",
    pair: "DIRAC / USDT",
    content: "Dirac Finance is a DeFi protocol enabling any LP...",
    progress: { label: "Current Crowdsale Period", percentage: "100%" },
    raiseAmount: "$40.2M",
    contributeChain: { name: "BNB", icon: "/img/BNB.png" },
    distributeChain: { name: "POLYGON", icon: "/img/POLYGON.png" },
    isLive: true,
    dealEndsIn: "",
    startIn: 2,
  },
  {
    imageSrc: "/img/card1.png",
    tags: [
      { label: "IDO", color: "blue" },
      { label: "Refundable", color: "green" },
      { label: "KYC", color: "yellow" },
    ],
    author: { username: "Libera", avatar: "/img/lix.png" },
    likedCount: 34,
    title: "Dirac Finance",
    pair: "DIRAC / USDT",
    content: "Dirac Finance is a DeFi protocol enabling any LP...",
    progress: { label: "Current Crowdsale Period", percentage: "100%" },
    raiseAmount: "$40.2M",
    contributeChain: { name: "BNB", icon: "/img/BNB.png" },
    distributeChain: { name: "POLYGON", icon: "/img/POLYGON.png" },
    isLive: true,
    dealEndsIn: "",
    startIn: 2,
  },
  {
    imageSrc: "/img/card1.png",
    tags: [
      { label: "IDO", color: "blue" },
      { label: "Refundable", color: "green" },
      { label: "KYC", color: "yellow" },
    ],
    author: { username: "Libera", avatar: "/img/lix.png" },
    likedCount: 34,
    title: "Dirac Finance",
    pair: "DIRAC / USDT",
    content: "Dirac Finance is a DeFi protocol enabling any LP...",
    progress: { label: "Current Crowdsale Period", percentage: "100%" },
    raiseAmount: "$40.2M",
    contributeChain: { name: "BNB", icon: "/img/BNB.png" },
    distributeChain: { name: "POLYGON", icon: "/img/POLYGON.png" },
    isLive: true,
    dealEndsIn: "",
    startIn: 2,
  },
];

export default function ProjectDetails() {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const router = useRouter();

  const metaData = {
    title: "Communities - Launchpad",
    keywords: "crypto, Veternary",
    description: "Communities - Launchpad",
    url: router.asPath,
  };

  const [fetchError, setFetchError] = useState(null);
  const [communities, setCommunities] = useState([]);
  const [singleCommunitiesData , setSingleCommunitiesData] = useState({})
  const [specificDeal , setSpecificDeal] = useState({})
  

  const [deals, setDeals] = useState([]);


  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const { data , error } = await supabase.from("deals").select().eq('com_id' , router?.query?.id);
        if (error) {
          throw error;
        }
        setSpecificDeal(data?.[0]) 
        setDeals(data);
      } catch (error) {
        console.error("Error fetching deals:", error.message);
      }
    };

    if(router?.query?.id){

      fetchDeals();
    }

 
  }, [router?.query?.id]);

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
          const { data: allCommunities, error } = await supabase
            .from("community")
            .select().eq('id' , router?.query?.id);
          if (error) {
            setFetchError("Could not fetch community data");
            console.error(error);
          } else {
            setSingleCommunitiesData(allCommunities?.[0])
            setCommunities(allCommunities);
            setFetchError(null);
          }
        
      } catch (error) {
        setFetchError("An error occurred while fetching community data");
        console.error(error);
      }
    };


    if(router?.query?.id){
      fetchCommunity();
    }
  }, [router?.query?.id]);

  return (
    <>
      <Seo {...metaData} />
      <section className="coom-detail-area position-relative">
        <Container>
          <Row>
            <Col lg={1} className="custom-col-1">
              <CommunirySideList />
            </Col>
            <Col lg={11} className="custom-col-11">
              <Row>
                <Col lg={12} className="order-1">
                  <div className="d-flex justify-content-between flex-column flex-md-row mb-0 mb-md-4">
                    <div className="flex-wrapper">
                      {/* {communities.length > 0 && singleCommunitiesData?.community_logo && ( */}
                      {/* {communities.map((community) => ( */}
                     
                        <Image
                          // key={community.id}
                          src={
                            communities.length > 0 &&
                            singleCommunitiesData?.community_logo
                          }
                              
                            
                          
                          alt="Community Logo"
                          className="me-3"
                          width={56}
                          height={56}
                        />
                      {/* ))} */}
                     

                      <div className="d-flex flex-column title-wrapper">
                        <div className="d-flex align-items-center">
                          <h1 className="mb-0">
                            {communities.length > 0 && (
                              <div key={singleCommunitiesData?.id}>
                                <h3>{singleCommunitiesData?.community_name}</h3>
                              </div>
                            )}
                          </h1>
                          

                          <div class="tags-list position-static tags-small d-inline-flex">
                            <span class="tag yellow">KYC</span>
                            <span class="tag green">
                              <i class="fa-solid fa-badge-check me-2"></i>
                              Verified
                            </span>
                          </div>
                        </div>
                        <p className="mb-0">
                          {communities.length > 0 && (
                            <div key={singleCommunitiesData?.id}>
                              <p>{singleCommunitiesData?.description}</p>
                            </div>
                          )}
                          
                        </p>
                      </div>
                    </div>
                    <div className="social-media mt-3 mt-md-0">
                      <Link href={"/#"}>
                        <i className="fab fa-discord"></i>
                      </Link>
                      <Link href={"/#"}>
                        <i className="fab fa-telegram"></i>
                      </Link>
                      <Link href={"/#"}>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.0585 1.25L9.32475 13.6396L0 23.7125H2.09888L10.2626 14.8933L16.8585 23.7125H24L14.2125 10.6265L22.8915 1.25H20.793L13.2746 9.3725L7.2 1.25H0.0585ZM3.14475 2.79575H6.42562L20.9134 22.1671H17.6325L3.14475 2.79575Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </Link>
                      <Link href={"/#"}>
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href={"/#"}>
                        <i class="fa-regular fa-globe"></i>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="mt-3 mt-lg-0 order-3 order-lg-2">
                  <div className="live-card livethird white-card">
                    <div className="card-content">
                      <div className="d-flex justify-content-between align-items-center ">
                        <div className="d-flex align-items-center icon-title text-black">
                          <Image
                            src={
                              communities.length > 0 &&
                              singleCommunitiesData?.community_logo
                            }
                            className="me-2 rounded"
                            width={50}
                            height={50}
                            alt="author"
                          />
                          <div>
                            <h3 className="fw-bold fs-5 mb-1">
                              @
                                <div >
                                  <h3>{specificDeal?.deal_name || ""}</h3>
                                </div>
                            </h3>
                            <p className="content-font color-content mb-0">
                              { }
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="content-font mb-3 mt-3 text-start">
                          <div >
                            <p>{specificDeal?.deal_description || "-"}</p>
                          </div>
                      </p>
                      <div className="prog-bar mt-3 mb-1 text-start">
                        <span className="content-font">
                          {"Current Crowdsale Period"}
                        </span>
                        <div className="progbar">
                          <div className="progress-container">
                            <div
                              className="progress-bar"
                              style={{ width: "20%" }}
                            ></div>
                            <div
                              className="shadow-animated"
                              style={{ width: "20%" }}
                            ></div>
                          </div>
                          <span>{"20%"}</span>
                        </div>
                      </div>
                      <div className="startup-layer align-items-center mt-3 d-flex justify-content-between">
                        <p>Starts In:</p>
                        <span>8d 16h 49m 48s</span>
                      </div>
                      <div className="points-list">
                        <div className="list">
                          <p>Fundraising Goal:</p>

                            <div>
                              <p>{specificDeal?.fundraising_goal || "-"}M</p>
                            </div>
                        </div>
                        <div className="list">
                          <p>Туре:</p>
                          <p>
                              <div >
                                <p>{specificDeal?.typ || "-"}</p>
                              </div>
                          </p>
                        </div>
                        <div className="list">
                          <p>Token Price:</p>
                          <p>
                              <div >
                                <p>{specificDeal?.token_price || 0}</p>
                              </div>
                          </p>
                        </div>
                        <div className="list">
                          <p>Join Network:</p>
                          <p className="d-flex align-items-center">
                            <Image
                              src={"/img/BNB.png"}
                              width={24}
                              height={24}
                              alt={"BNB"}
                              className="d-inline-block me-2"
                            />{" "}
                              <div >
                                <p>{specificDeal?.join_network || "-"}</p>
                              </div>
                          </p>
                        </div>
                        <div className="list">
                          <p>Distribution Network:</p>
                          <p className="d-flex align-items-center">
                            <Image
                              src={"/img/POLYGON.png"}
                              width={24}
                              height={24}
                              alt={"POLYGON"}
                              className="d-inline-block me-2"
                            />{" "}
                              <div >
                                <p>{specificDeal?.distribution_network ?? "-"}</p>
                              </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      className={`live-btn text-uppercase rounded-bottom`}
                    >
                      <span className="time">{"Participate"}</span>
                    </button>
                  </div>
                </Col>
                <Col lg={8} className="order-2 order-lg-3">
                  <div className="order-wrapper">
                    <div className="counter-list second mt-4 mt-lg-0 d-flex flex-wrap">
                      <div className="counter-boxnew">
                        <span>Total Raised</span>
                        <h3 className="mb-0">
                          {communities.length > 0 && (
                            <div key={singleCommunitiesData?.id}>
                              <p>{singleCommunitiesData?.total_raise}M</p>
                            </div>
                          )}
                        </h3>
                      </div>
                      <div className="counter-boxnew">
                        <span>Total Distributed</span>
                        <h3 className="mb-0">
                            <div >
                              <p>{specificDeal?.total_distributed ?? 0}k</p>
                            </div>
                        </h3>
                      </div>
                      <div className="counter-boxnew">
                        <span>Total Followers </span>
                        <h3 className="mb-0">
                            <div >
                              <h3>{specificDeal?.total_follower ?? 0}k+</h3>
                            </div>
                        </h3>
                      </div>
                      <div className="counter-boxnew">
                        <span>Feedback Score</span>
                        <h3 className="mb-0">
                            <div >
                              <h3>{specificDeal?.feedback_score || 0} |200</h3>
                            </div>
                        </h3>
                      </div>
                    </div>
                    <Image
                      src={communities.length > 0 && singleCommunitiesData?.banner} //deal image on right
                      alt="image"
                      className="img-fluid counter-image w-100 mt-4 mt-lg-4"
                      width={782}
                      height={469}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="g-3 g-md-4 mt-3 mt-md-3">
                <Col lg={12}>
                  <Nav
                    variant="tabs"
                    defaultActiveKey={activeTab}
                    className="tabs-buttons mb-3"
                  >
                    <Nav.Item>
                      <Nav.Link
                        eventKey="All"
                        onClick={() => handleTabChange("All")}
                      >
                        All
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="Live"
                        onClick={() => handleTabChange("Live")}
                      >
                        Live
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="Upcomming"
                        onClick={() => handleTabChange("Upcomming")}
                      >
                        Upcomming
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="Ended"
                        onClick={() => handleTabChange("Ended")}
                      >
                        Ended
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                {liveDealsData &&
                  liveDealsData.map((deal, index) => (
                    <Col lg={4} key={"live" + index}>
                      <LiveDealCard {...deal} />
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
