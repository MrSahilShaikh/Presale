import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';


const LiveDealCard = ({ imageSrc, tags, author, likedCount, title, pair, content, progress, raiseAmount, contributeChain, distributeChain, isLive, dealEndsIn, startIn }) => {
    return (
        <Link href={'/project-detail'} className='live-card white-card'>
            <Image src={'/img/card.png'} alt='' className='card-image w-100 img-fluid' width={310} height={173} />
            <div className='tags-list'>
                {tags.map((tag, index) => (
                    <span key={index} className={`tag ${tag.color}`}>{tag.label}</span>
                ))}
            </div>
            <div className='card-content'>
                <div className='d-flex justify-content-between align-items-center markbar'>
                    <div className='d-flex align-items-center icon-title'>
                        <Image src={author.avatar} className='me-2' width={32} height={32} alt='author' />
                        @{author.username}
                    </div>
                    <div className='d-flex align-items-center like-btn'>
                        <i className='fa fa-heart liked'></i>
                        {likedCount}
                    </div>
                </div>
                <div className='title-bar mt-3 mb-1'>
                    <h3>{title}</h3>
                    <span>{pair}</span>
                </div>
                <p className='content-font mb-3 text-start'>{content}</p>
                {(startIn === 1 || startIn === 2) && (
                    <div className='prog-bar mt-3 mb-1 text-start'>
                        <span>{progress.label}</span>
                        <div className='progbar'>
                            <div className='progress-container'>
                                <div className='progress-bar' style={{ width: progress.percentage }}></div>
                                <div className='shadow-animated' style={{ width: progress.percentage }}></div>
                            </div>
                            <span>{progress.percentage}</span>
                        </div>
                    </div>
                )}
                <div className='points-list'>
                    <div className='list'>
                        <p>Total Raise</p>
                        <p>{raiseAmount}</p>
                    </div>
                    <div className='list'>
                        <p>Contribute Chain</p>
                        <p className='d-flex align-items-center'><Image src={contributeChain.icon} width={24} height={24} alt={contributeChain.name} className='d-inline-block me-2' /> {contributeChain.name}</p>
                    </div>
                    <div className='list'>
                        <p>Distribute Chain</p>
                        <p className='d-flex align-items-center'><Image src={distributeChain.icon} width={24} height={24} alt={distributeChain.name} className='d-inline-block me-2' /> {distributeChain.name}</p>
                    </div>
                </div>
            </div>
            {startIn !== 2 && (
                <button className={`live-btn mt-3 ${startIn === 0 ? 'startlive' : ''}`}>
                    {isLive && startIn === 1 && <span className='live'>Live</span>}
                    <span className='mini'>{startIn === 1 ? 'Deal Ends In' : 'Deal Starts In'}</span>
                    <span className='time'>{dealEndsIn}</span>
                </button>
            )}

        </Link>
    );
};

export default LiveDealCard;

// //below card in deals page
// import React, { useState, useEffect } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Link from "next/link";
// import Image from "next/image";
// import supabase from "../config/supabaseClient";
// import { common } from "@mui/material/colors";

// const LiveDealCard = ({
//   imageSrc,
//   tags,
//   author,
//   likedCount,
//   title,
//   pair,
//   content,
//   progress,
//   raiseAmount,
//   contributeChain,
//   distributeChain,
//   isLive,
//   dealEndsIn,
//   startIn,
// }) => {
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

//   return (
//     <div>
//       {communities.map((communityItem) => (
//         <Link key={communityItem.id} href={"/project-detail"} className="live-card white-card">
//           <Image
//             src={"/img/card.png"}
//             alt=""
//             className="card-image w-100 img-fluid"
//             width={310}
//             height={173}
//           />
//           <div className="tags-list">
//             {tags.map((tag, index) => (
//               <span key={index} className={`tag ${tag.color}`}>
//                 {tag.label}
//               </span>
//             ))}
//           </div>
//           <div className="card-content">
//             <div className="d-flex justify-content-between align-items-center markbar">
//               <div className="d-flex align-items-center icon-title">
//                 <Image
//                   src={author.avatar}
//                   className="me-2"
//                   width={32}
//                   height={32}
//                   alt="author"
//                 />
//                 @{communityItem.community_name}
//               </div>
//               <div className="d-flex align-items-center like-btn">
//                 <i className="fa fa-heart liked"></i>
//                 {communityItem.likedCount}
//               </div>
//             </div>
//             <div className="title-bar mt-3 mb-1">
//               <h3>{title}</h3>
//               <span>{pair}</span>
//             </div>
//             <p className="content-font mb-3 text-start">{content}</p>
//             {(startIn === 1 || startIn === 2) && (
//               <div className="prog-bar mt-3 mb-1 text-start">
//                 <span>{progress.label}</span>
//                 <div className="progbar">
//                   <div className="progress-container">
//                     <div
//                       className="progress-bar"
//                       style={{ width: progress.percentage }}
//                     ></div>
//                     <div
//                       className="shadow-animated"
//                       style={{ width: progress.percentage }}
//                     ></div>
//                   </div>
//                   <span>{progress.percentage}</span>
//                 </div>
//               </div>
//             )}
//             <div className="points-list">
//               <div className="list">
//                 <p>Total Raise</p>
//                 <p>{communityItem.total_raise}</p>
//               </div>
//               <div className="list">
//                 <p>Contribute Chain</p>
//                 <p className="d-flex align-items-center">
//                   <Image
//                     src={contributeChain.icon}
//                     width={24}
//                     height={24}
//                     alt={contributeChain.name}
//                     className="d-inline-block me-2"
//                   />{" "}
//                   {contributeChain.name}
//                 </p>
//               </div>
//               <div className="list">
//                 <p>Distribute Chain</p>
//                 <p className="d-flex align-items-center">
//                   <Image
//                     src={distributeChain.icon}
//                     width={24}
//                     height={24}
//                     alt={distributeChain.name}
//                     className="d-inline-block me-2"
//                   />{" "}
//                   {distributeChain.name}
//                 </p>
//               </div>
//             </div>
//           </div>
//           {startIn !== 2 && (
//             <button className={`live-btn mt-3 ${startIn === 0 ? "startlive" : ""}`}>
//               {isLive && startIn === 1 && <span className="live">Live</span>}
//               <span className="mini">
//                 {startIn === 1 ? "Deal Ends In" : "Deal Starts In"}
//               </span>
//               <span className="time">{dealEndsIn}</span>
//             </button>
//           )}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default LiveDealCard;

