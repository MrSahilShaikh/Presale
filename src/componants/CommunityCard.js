

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import supabase from "../config/supabaseClient";

const CommunityCard = ({ communityData }) => {
  const {
    username,
    avatarSrc,
    description,
    likes,
    totalRaise,
    contributeChain,
    distributeChain,
    tags,
  } = communityData;

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
      {communities.map((communityItem) => (
        <Link key={communityItem.id} href={"/community-details"} className="comm-card white-card">
          <div className="card-content">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center icon-title">
                <Image
                  src={communityItem.avatarSrc}
                  className="me-2"
                  width={56}
                  height={56}
                  alt="author"
                />
                <div>
                  <span>@{communityItem.community_name}</span>
                  <p className="content-font mb-0 text-start">{communityItem.description}</p>
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
                <p>{communityItem.total_raise}</p>
              </div>
              <div className="list">
                <p>Contribute Chain</p>
                <p className="d-flex align-items-center">{communityItem.contribute_chain}</p>
              </div>
              <div className="list">
                <p>Distribute Chain</p>
                <p className="d-flex align-items-center">{communityItem.distribute_chain}</p>
              </div>
            </div>

            <div className="tags-list larger p-0 noposition">
              {communityItem.tags.map((tag, index) => (
                <span key={index} className={tag.color}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CommunityCard;
