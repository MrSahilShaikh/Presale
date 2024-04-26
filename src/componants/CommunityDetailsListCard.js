import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import supabase from "../config/supabaseClient";
// import { color, colors } from "@mui/system";
import getTagColor from "./tagColor";

const CommunityDetailsListCard = ({ communityData }) => {
  // const {
  //   username,
  //   avatarSrc,
  //   description,
  //   likes,
  //   totalRaise,
  //   contributeChain,
  //   distributeChain,
  //   tags,
  // } = communityData;

  const [fetchError, setFetchError] = useState(null);
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const { data: allCommunities, error } = await supabase
          .from("community")
          .select();

        if (error) {
          setFetchError("Could not fetch community data");
          console.error(error);
        } else {
          // console.log(allCommunities,'sahil');
          setCommunities(allCommunities);

          setFetchError(null);
        }
      } catch (error) {
        setFetchError("An error occurred while fetching community data");
        console.error(error);
      }
    };

    fetchCommunity();
  }, []);


  return (
    <div>
      {communities.map((communityItem) => {
        // console.log("communityItem*****************",communityItem);
        return (
          <Link
            key={communityItem.id}
            href={`/community-details/`}
            className="comm-card comm-card-two white-card"
          >
            <Image
              // Use logoUrl here
              src={communityItem.banner}
              alt=""
              className="card-image w-100 img-fluid"
              width={310}
              height={173}
            />

            <div className="tags-list">
              <span className={`tag yellow`}>KYC</span>
              <span className={`tag green`}>
                <i className="fa fa-verified"></i> Verified
              </span>
            </div>
            <div className="card-content">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center icon-title">
                  <Image
                    src={communityItem.community_logo} // Use avatarSrc here
                    className="me-2"
                    width={56}
                    height={56}
                    alt="author"
                  />
                  <div>
                    <span>@{communityItem.community_name}</span>
                    <p className="content-font mb-0 text-start">
                      {communityItem.description}
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center like-btn">
                  <i className="fa fa-heart liked me-2"></i>
                  {communityItem.likes}
                </div>
              </div>

              <div className="points-list mt-4 mb-3">
                <div className="list">
                  <p>Total Raise</p>
                  <p>{communityItem.total_raise}M</p>
                </div>
                <div className="list">
                  <p>Contribute Chain</p>
                  <p className="d-flex align-items-center">
                    {communityItem.contribute_chain}
                  </p>
                </div>
                <div className="list">
                  <p>Distribute Chain</p>
                  <p className="d-flex align-items-center">
                    {communityItem.distribute_chain}
                  </p>
                </div>
              </div>
              <div className="tags-list larger p-0 noposition">
                {/* tags: [
            { label: 'Launchpad / IDO', color: 'blue' },
            { label: 'Refused Policy', color: 'green' },
            { label: 'KOL/ Influencer', color: 'yellow' },
            { label: 'Private & Seed Rounds', color: 'red' },
        ], */}
                {/* {tags.map((tag,) => (
                  <span key={index} className={tag.color}> 
                  <span style={color="blue"}>
                    {/* {tag.label} */}
                {/* {communityItem.tags}
                  </span>
                ))} */}

                <span style={{ backgroundColor: getTagColor(communityItem.tags) }}>
                  {communityItem.tags}
                </span>
              </div>

              <button className="w-100 button-primary mt-3">
                View Community
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CommunityDetailsListCard;
