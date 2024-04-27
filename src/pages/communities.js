

//working well
import MainLayout from "@/layouts/main/nav/MainLayout";
import Seo from "@/componants/Seo";
import { useRouter } from "next/router";
import supabase from "@/config/supabaseClient";
import {
  Accordion,
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  Row,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CommunityDetailsListCard from "@/componants/CommunityDetailsListCard";
import getTagColor from "@/componants/tagColor";

Communities.getLayout = (page) => (
  <MainLayout isonlyTop={true}>{page}</MainLayout>
);

export default function Communities() {
  const [activeTab, setActiveTab] = useState("All");
  const [isFilterOpen, setisFilterOpen] = useState(true);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [communitiesData, setCommunitiesData] = useState([
    // {
    //   id: 1,
    //   username: "Libera",
    //   avatarSrc: "/img/lix.png",
    //   description: "Libera is the DEX for RWA and on-chain FX, working...",
    //   likes: 34,
    //   totalRaise: "10",
    //   contributeChain: "$40.2M",
    //   distributeChain: "1002",
    //   tags: [
    //     { label: "Launchpad / IDO", color: "blue" },
    //     { label: "Refused Policy", color: "green" },
    //     { label: "KOL/ Influencer", color: "yellow" },
    //     { label: "Private & Seed Rounds", color: "red" },
    //   ],
    // },
    // {
    //   id: 2,
    //   username: "Libera",
    //   avatarSrc: "/img/lix.png",
    //   description: "Libera is the DEX for RWA and on-chain FX, working...",
    //   likes: 34,
    //   totalRaise: "10",
    //   contributeChain: "$40.2M",
    //   distributeChain: "1002",
    //   tags: [
    //     { label: "Launchpad / IDO", color: "blue" },
    //     { label: "Refused Policy", color: "green" },
    //     { label: "KOL/ Influencer", color: "yellow" },
    //     { label: "Private & Seed Rounds", color: "red" },
    //   ],
    // },
    // {
    //   id: 3,
    //   username: "Libera",
    //   avatarSrc: "/img/lix.png",
    //   description: "Libera is the DEX for RWA and on-chain FX, working...",
    //   likes: 34,
    //   totalRaise: "10",
    //   contributeChain: "$40.2M",
    //   distributeChain: "1002",
    //   tags: [
    //     { label: "Launchpad / IDO", color: "blue" },
    //     { label: "Refused Policy", color: "green" },
    //     { label: "KOL/ Influencer", color: "yellow" },
    //     { label: "Private & Seed Rounds", color: "red" },
    //   ],
    // },
    // {
    //   id: 4,
    //   username: "Libera",
    //   avatarSrc: "/img/lix.png",
    //   description: "Libera is the DEX for RWA and on-chain FX, working...",
    //   likes: 34,
    //   totalRaise: "10",
    //   contributeChain: "$40.2M",
    //   distributeChain: "1002",
    //   tags: [
    //     { label: "Launchpad / IDO", color: "blue" },
    //     { label: "Refused Policy", color: "green" },
    //     { label: "KOL/ Influencer", color: "yellow" },
    //     { label: "Private & Seed Rounds", color: "red" },
    //   ],
    // },
    // {
    //   id: 5,
    //   username: "Libera",
    //   avatarSrc: "/img/lix.png",
    //   description: "Libera is the DEX for RWA and on-chain FX, working...",
    //   likes: 34,
    //   totalRaise: "10",
    //   contributeChain: "$40.2M",
    //   distributeChain: "1002",
    //   tags: [
    //     { label: "Launchpad / IDO", color: "blue" },
    //     { label: "Refused Policy", color: "green" },
    //     { label: "KOL/ Influencer", color: "yellow" },
    //     { label: "Private & Seed Rounds", color: "red" },
    //   ],
    // },
    // {
    //   id: 6,
    //   username: "Libera",
    //   avatarSrc: "/img/lix.png",
    //   description: "Libera is the DEX for RWA and on-chain FX, working...",
    //   likes: 34,
    //   totalRaise: "10",
    //   contributeChain: "$40.2M",
    //   distributeChain: "1002",
    //   tags: [
    //     { label: "Launchpad / IDO", color: "blue" },
    //     { label: "Refused Policy", color: "green" },
    //     { label: "KOL/ Influencer", color: "yellow" },
    //     { label: "Private & Seed Rounds", color: "red" },
    //   ],
    // },
  ]);

  const router = useRouter();

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = [...selectedCheckboxes];
    const index = updatedCheckboxes.indexOf(id);
    if (index === -1) {
      updatedCheckboxes.push(id);
    } else {
      updatedCheckboxes.splice(index, 1);
    }
    setSelectedCheckboxes(updatedCheckboxes);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleFilter = () => {
    setisFilterOpen(!isFilterOpen);
    console.log(isFilterOpen);
  };


  const metaData = {
    title: "Communities - Launchpad",
    keywords: "crypto, Veternary",
    description: "Communities - Launchpad",
    url: router.asPath,
  };

  

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const { data: allCommunities, error } = await supabase
          .from("community")
          .select();

        if (error) {
          //   setFetchError("Could not fetch community data");
          console.error(error);
        } else {
          console.log(allCommunities, "sahil");
          setCommunitiesData(allCommunities);

          //   setFetchError(null);
        }
      } catch (error) {
        // setFetchError("An error occurred while fetching community data");
        console.error(error);
      }
    };

    fetchCommunity();
  }, []);

  return (
    <>
      <Seo {...metaData} />
      <section className="comm-list-area position-relative">
        <Container>
          <Row>
            <Col lg={12}>
              <Row>
                <Col lg={12}>
                  <h2 class="section-heading text-start mb-3 mb-md-4">
                    Communities
                  </h2>
                </Col>
                <Col lg={6}>
                  <div className="filter-wrapper">
                    <button
                      className={`filter-btn me-3 ${!isFilterOpen && "open"}`}
                      onClick={() => handleFilter()}
                    >
                      <i class="fa-regular fa-bars-filter"></i>
                    </button>
                    <InputGroup>
                      <InputGroup.Text
                        id="basic-addon1"
                        className="bg-transparent"
                      >
                        <i class="fa-regular fa-magnifying-glass"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="search"
                        className="ps-0"
                        placeholder="Search Here.."
                        aria-label="Search Here.."
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="d-flex justify-content-start justify-content-lg-end mt-3 mt-lg-0 ">
                    <Nav
                      variant="tabs"
                      defaultActiveKey={activeTab}
                      className="tabs-buttons  mb-0"
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
                          eventKey="Featured"
                          onClick={() => handleTabChange("Featured")}
                        >
                          Featured
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="Promoted"
                          onClick={() => handleTabChange("Promoted")}
                        >
                          Promoted
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </Col>
              </Row>
              <Row className="mt-0 mt-md-4">
                <Col lg="12">
                  <Row>
                    <Col lg="3" className={`${isFilterOpen && "d-none"}`}>
                      <div className="filter-sidebar ">
                        <Accordion
                          className="accordian-wrapper"
                          defaultActiveKey={["0"]}
                          alwaysOpen
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Category</Accordion.Header>
                            <Accordion.Body>
                              <ul class="unstyled centered">
                                <li
                                  className={
                                    selectedCheckboxes.includes(
                                      "styled-checkbox-1"
                                    )
                                      ? "selected"
                                      : ""
                                  }
                                >
                                  <input
                                    class="styled-checkbox"
                                    id="styled-checkbox-1"
                                    type="checkbox"
                                    value={`styled-checkbox-1`}
                                    onChange={() =>
                                      handleCheckboxChange("styled-checkbox-1")
                                    }
                                    checked={selectedCheckboxes.includes(
                                      "styled-checkbox-1"
                                    )}
                                  />
                                  <label for="styled-checkbox-1">
                                    Lorem Ipsum
                                  </label>
                                </li>
                                <li
                                  className={
                                    selectedCheckboxes.includes(
                                      "styled-checkbox-2"
                                    )
                                      ? "selected"
                                      : ""
                                  }
                                >
                                  <input
                                    class="styled-checkbox"
                                    id="styled-checkbox-2"
                                    type="checkbox"
                                    value={`styled-checkbox-2`}
                                    onChange={() =>
                                      handleCheckboxChange("styled-checkbox-2")
                                    }
                                    checked={selectedCheckboxes.includes(
                                      "styled-checkbox-2"
                                    )}
                                  />
                                  <label for="styled-checkbox-2">
                                    Lorem Ipsum
                                  </label>
                                </li>
                                <li
                                  className={
                                    selectedCheckboxes.includes(
                                      "styled-checkbox-3"
                                    )
                                      ? "selected"
                                      : ""
                                  }
                                >
                                  <input
                                    class="styled-checkbox"
                                    id="styled-checkbox-3"
                                    type="checkbox"
                                    value={`styled-checkbox-3`}
                                    onChange={() =>
                                      handleCheckboxChange("styled-checkbox-3")
                                    }
                                    checked={selectedCheckboxes.includes(
                                      "styled-checkbox-3"
                                    )}
                                  />
                                  <label for="styled-checkbox-3">
                                    Lorem Ipsum
                                  </label>
                                </li>
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Total Projects</Accordion.Header>
                            <Accordion.Body>
                              <ul class="unstyled centered">
                                <li
                                  className={
                                    selectedCheckboxes.includes(
                                      "styled-checkbox-4"
                                    )
                                      ? "selected"
                                      : ""
                                  }
                                >
                                  <input
                                    class="styled-checkbox"
                                    id="styled-checkbox-4"
                                    type="checkbox"
                                    value={`styled-checkbox-4`}
                                    onChange={() =>
                                      handleCheckboxChange("styled-checkbox-4")
                                    }
                                    checked={selectedCheckboxes.includes(
                                      "styled-checkbox-4"
                                    )}
                                  />
                                  <label for="styled-checkbox-4">
                                    Lorem Ipsum
                                  </label>
                                </li>
                                <li
                                  className={
                                    selectedCheckboxes.includes(
                                      "styled-checkbox-5"
                                    )
                                      ? "selected"
                                      : ""
                                  }
                                >
                                  <input
                                    class="styled-checkbox"
                                    id="styled-checkbox-5"
                                    type="checkbox"
                                    value={`styled-checkbox-5`}
                                    onChange={() =>
                                      handleCheckboxChange("styled-checkbox-5")
                                    }
                                    checked={selectedCheckboxes.includes(
                                      "styled-checkbox-5"
                                    )}
                                  />
                                  <label for="styled-checkbox-5">
                                    Lorem Ipsum
                                  </label>
                                </li>
                                <li
                                  className={
                                    selectedCheckboxes.includes(
                                      "styled-checkbox-6"
                                    )
                                      ? "selected"
                                      : ""
                                  }
                                >
                                  <input
                                    class="styled-checkbox"
                                    id="styled-checkbox-6"
                                    type="checkbox"
                                    value={`styled-checkbox-6`}
                                    onChange={() =>
                                      handleCheckboxChange("styled-checkbox-6")
                                    }
                                    checked={selectedCheckboxes.includes(
                                      "styled-checkbox-6"
                                    )}
                                  />
                                  <label for="styled-checkbox-6">
                                    Lorem Ipsum
                                  </label>
                                </li>
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Total Raised</Accordion.Header>
                            <Accordion.Body>
                              <ul class="unstyled centered">
                                <li
                                  className={
                                    selectedCheckboxes.includes(
                                      "styled-checkbox-7"
                                    )
                                      ? "selected"
                                      : ""
                                  }
                                >
                                  <input
                                    class="styled-checkbox"
                                    id="styled-checkbox-7"
                                    type="checkbox"
                                    value={`styled-checkbox-7`}
                                    onChange={() =>
                                      handleCheckboxChange("styled-checkbox-7")
                                    }
                                    checked={selectedCheckboxes.includes(
                                      "styled-checkbox-7"
                                    )}
                                  />
                                  <label for="styled-checkbox-7">
                                    Lorem Ipsum
                                  </label>
                                </li>
                                <li
                                  className={
                                    selectedCheckboxes.includes(
                                      "styled-checkbox-8"
                                    )
                                      ? "selected"
                                      : ""
                                  }
                                >
                                  <input
                                    class="styled-checkbox"
                                    id="styled-checkbox-8"
                                    type="checkbox"
                                    value={`styled-checkbox-8`}
                                    onChange={() =>
                                      handleCheckboxChange("styled-checkbox-8")
                                    }
                                    checked={selectedCheckboxes.includes(
                                      "styled-checkbox-8"
                                    )}
                                  />
                                  <label for="styled-checkbox-8">
                                    Lorem Ipsum
                                  </label>
                                </li>
                                <li
                                  className={
                                    selectedCheckboxes.includes(
                                      "styled-checkbox-9"
                                    )
                                      ? "selected"
                                      : ""
                                  }
                                >
                                  <input
                                    class="styled-checkbox"
                                    id="styled-checkbox-9"
                                    type="checkbox"
                                    value={`styled-checkbox-9`}
                                    onChange={() =>
                                      handleCheckboxChange("styled-checkbox-9")
                                    }
                                    checked={selectedCheckboxes.includes(
                                      "styled-checkbox-9"
                                    )}
                                  />
                                  <label for="styled-checkbox-9">
                                    Lorem Ipsum
                                  </label>
                                </li>
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>
                              Community Members
                            </Accordion.Header>
                            <Accordion.Body>
                              <ul class="unstyled centered">
                                <li
                                  className={
                                    selectedCheckboxes.includes(
                                      "styled-checkbox-10"
                                    )
                                      ? "selected"
                                      : ""
                                  }
                                >
                                  <input
                                    class="styled-checkbox"
                                    id="styled-checkbox-10"
                                    type="checkbox"
                                    value={`styled-checkbox-10`}
                                    onChange={() =>
                                      handleCheckboxChange("styled-checkbox-10")
                                    }
                                    checked={selectedCheckboxes.includes(
                                      "styled-checkbox-10"
                                    )}
                                  />
                                  <label for="styled-checkbox-10">
                                    Lorem Ipsum
                                  </label>
                                </li>
                                <li
                                  className={
                                    selectedCheckboxes.includes(
                                      "styled-checkbox-11"
                                    )
                                      ? "selected"
                                      : ""
                                  }
                                >
                                  <input
                                    class="styled-checkbox"
                                    id="styled-checkbox-11"
                                    type="checkbox"
                                    value={`styled-checkbox-11`}
                                    onChange={() =>
                                      handleCheckboxChange("styled-checkbox-11")
                                    }
                                    checked={selectedCheckboxes.includes(
                                      "styled-checkbox-11"
                                    )}
                                  />
                                  <label for="styled-checkbox-11">
                                    Lorem Ipsum
                                  </label>
                                </li>
                                <li
                                  className={
                                    selectedCheckboxes.includes(
                                      "styled-checkbox-12"
                                    )
                                      ? "selected"
                                      : ""
                                  }
                                >
                                  <input
                                    class="styled-checkbox"
                                    id="styled-checkbox-12"
                                    type="checkbox"
                                    value={`styled-checkbox-12`}
                                    onChange={() =>
                                      handleCheckboxChange("styled-checkbox-12")
                                    }
                                    checked={selectedCheckboxes.includes(
                                      "styled-checkbox-12"
                                    )}
                                  />
                                  <label for="styled-checkbox-12">
                                    Lorem Ipsum
                                  </label>
                                </li>
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </Col>
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          {communitiesData.map((community, index) => {
                            return (
                              <div className="col-4" key={index+1}>
                                {/* <Link
                                  key={community.id}
                                  href={`/community-details/`}
                                  className="comm-card comm-card-two white-card"
                                > */}
                                <div className="comm-card comm-card-two white-card">

                                  <Image
                                    src={community?.banner}
                                    alt=""
                                    className="card-image w-100 img-fluid"
                                    width={310}
                                    height={173}
                                  />
                                  <div className="tags-list">
                                    <span className={`tag yellow`}>KYC</span>
                                    <span className={`tag green`}>
                                      <i className="fa fa-verified"></i>{" "}
                                      Verified
                                    </span>
                                  </div>
                                  <div className="card-content">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="d-flex align-items-center icon-title">
                                        <Image
                                          src={community?.community_logo}
                                          className="me-2"
                                          width={56}
                                          height={56}
                                          alt="author"
                                        />
                                        <div>
                                          <span>
                                            @{community.community_name}
                                          </span>
                                          <p className="content-font mb-0 text-start">
                                            {community?.description}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-center like-btn">
                                        <i className="fa fa-heart liked me-2"></i>
                                        {community.likes}
                                      </div>
                                    </div>

                                    <div className="points-list mt-4 mb-3">
                                      <div className="list">
                                        <p>Total Raise</p>
                                        <p>{community.total_raise}M</p>
                                      </div>
                                      <div className="list">
                                        <p>Contribute Chain</p>
                                        <p className="d-flex align-items-center">
                                          {community.contribute_chain}
                                        </p>
                                      </div>
                                      <div className="list">
                                        <p>Distribute Chain</p>
                                        <p className="d-flex align-items-center">
                                          {community.distribute_chain}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="tags-list larger p-0 noposition">
                                      {/* {community?.tags.map((tag, index) => (
                                        <span key={index} className={tag?.color}>
                                          {tag?.label}
                                        </span>
                                      ))} */}
                                      <span
                                        style={{
                                          backgroundColor: getTagColor(
                                            community.tags
                                          ),
                                        }}
                                      >
                                        {community.tags}
                                      </span>
                                    </div>

                                    <button className="w-100 button-primary mt-3"
                                 
                                    onClick={(e)=>{
                                        router.push({
                                          pathname:"/community-details",
                                          query:{
                                            id:community?.id
                                          }
                                        })

                                    }}
                                      >
                                      View Community
                                    </button>
                                  </div>
                                  </div>
                                {/* </Link> */}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    {/* <Col className={`mt-2 mt-lg-0 ${isFilterOpen ? 'col-lg-12' : 'col-lg-9'}`}>
                                            <Row className="g-3 g-md-4 ">
                                                {communitiesData.map((community, index) => (
                                                   
                                                    <Col className={`${isFilterOpen ? 'col-md-6 col-xl-4' : 'col-lg-6'}`} key={'Test' + index}>
                                                        <CommunityDetailsListCard communityData={community} />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col> */}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
