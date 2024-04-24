// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import supabase from "../config/supabaseClient";

// const CommunityDetailsListCard = ({ communityData }) => {
//   const {
//     username,
//     avatarSrc,
//     description,
//     likes,
//     totalRaise,
//     contributeChain,
//     distributeChain,
//     tags,
//   } = communityData;

//   const [fetchError, setFetchError] = useState(null);
//   const [communities, setCommunities] = useState([]);

//   useEffect(() => {
//     const fetchCommunity = async () => {
//       try {
//         const { data: allCommunities, error } = await supabase
//           .from("community")
//           .select();

//         if (error) {
//           setFetchError("Could not fetch community data");
//           console.error(error);
//         } else {
//           setCommunities(allCommunities);
//           setFetchError(null);
//         }
//       } catch (error) {
//         setFetchError("An error occurred while fetching community data");
//         console.error(error);
//       }
//     };

//     fetchCommunity();
//   }, []);

  
//     const [logoUrl, setLogoUrl] = useState(null);
  
//     useEffect(() => {
//       const fetchLogo = async () => {
//         try {
//           // Fetch the logo URL from Supabase storage
//           const { publicURL, error } = await supabase.storage
//             .from('logo')
//             .getPublicUrl("https://mfeicxyamamccipyoodu.supabase.co/storage/v1/object/public/logo/sugarlogo.png?t=2024-04-24T07%3A23%3A18.782Z");
  
//           if (error) {
//             console.error("Error fetching logo:", error.message);
//           } else {
//             // Set the logo URL in the state
//             setLogoUrl(publicURL);
//           }
//         } catch (error) {
//           console.error("Error fetching logo:", error.message);
//         }
//       };
  
//       fetchLogo();
//     }, []);
  

//   return (
//     <div>
//       {communities.map((communityItem) => (
//         <Link
//           key={communityItem.id}
//           href={`/community-details/`}
//           className="comm-card comm-card-two white-card"
//         >
//           <Image
//             // src={"/img/card.png"}
//             src={logoUrl}
//             alt=""
//             className="card-image w-100 img-fluid"
//             width={310}
//             height={173}
//           />
//           <div className="tags-list">
//             <span className={`tag yellow`}>KYC</span>
//             <span className={`tag green`}>
//               <i className="fa fa-verified"></i> Verified
//             </span>
//           </div>
//           <div className="card-content">
//             <div className="d-flex justify-content-between align-items-center">
//               <div className="d-flex align-items-center icon-title">
//                 <Image
//                   // src={avatarSrc}
//                   src={logoUrl}
//                   className="me-2"
//                   width={56}
//                   height={56}
//                   alt="author"
//                 />
//                 <div>
//                   <span>@{communityItem.community_name}</span>
//                   <p className="content-font mb-0 text-start">
//                     {communityItem.description}
//                   </p>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center like-btn">
//                 <i className="fa fa-heart liked me-2"></i>
//                 {communityItem.likes}
//               </div>
//             </div>

//             <div className="points-list mt-4 mb-3">
//               <div className="list">
//                 <p>Total Raise</p>
//                 <p>{communityItem.total_raise}</p>
//               </div>
//               <div className="list">
//                 <p>Contribute Chain</p>
//                 <p className="d-flex align-items-center">
//                   {communityItem.contribute_chain}
//                 </p>
//               </div>
//               <div className="list">
//                 <p>Distribute Chain</p>
//                 <p className="d-flex align-items-center">
//                   {communityItem.distribute_chain}
//                 </p>
//               </div>
//             </div>
//             <div className="tags-list larger p-0 noposition">
//               {/* Ensure tags is an array before mapping over it */}
//               {/* {Array.isArray(communityItem.tags) && communityItem.tags.map((tag, index) => (
//                 <span key={index} className={tag.color}>
//                   {tag.label}
//                 </span>
//               ))} */}

//               {tags.map((tag, index) => (
//                 <span key={index} className={tag.color}>
//                   {tag.label}
//                 </span>
//               ))}
//             </div>

//             {/* <div className="tags-list larger p-0 noposition">
//               {tags.map((tag, index) => (
//                 <span key={index} className={tag.color}>
//                   {tag.label}
//                 </span>
//               ))}
//             </div> */}

//             <button className="w-100 button-primary mt-3">
//               View Community
//             </button>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default CommunityDetailsListCard;


import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import supabase from "../config/supabaseClient";

const CommunityDetailsListCard = ({ communityData }) => {
  const { username, avatarSrc, description, likes, totalRaise, contributeChain, distributeChain, tags } = communityData;

  const [fetchError, setFetchError] = useState(null);
  const [communities, setCommunities] = useState([]);
  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const { data: allCommunities, error } = await supabase.from("community").select();

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

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const { publicURL, error } = await supabase.storage.from('logo').getPublicUrl("logo/sugarlogo.png");

        if (error) {
          console.error("Error fetching logo:", error.message);
        } else {
          setLogoUrl(publicURL);
        }
      } catch (error) {
        console.error("Error fetching logo:", error.message);
      }
    };

    fetchLogo();
  }, []);

  return (
    <div>
      {communities.map((communityItem) => (
        <Link
          key={communityItem.id}
          href={`/community-details/`}
          className="comm-card comm-card-two white-card"
        >
          <Image
            src={logoUrl} // Use logoUrl here
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
                  src={avatarSrc} // Use avatarSrc here
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
                <p>{communityItem.total_raise}</p>
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
              {tags.map((tag, index) => (
                <span key={index} className={tag.color}>
                  {tag.label}
                </span>
              ))}
            </div>

            <button className="w-100 button-primary mt-3">
              View Community
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CommunityDetailsListCard;
