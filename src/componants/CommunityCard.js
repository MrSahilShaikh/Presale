import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import supabase from '../config/supabaseClient';
import { useEffect , useState } from 'react';

const CommunityCard = ({ communityData }) => {
    const { username, avatarSrc, description, likes, totalRaise, contributeChain, distributeChain, tags } = communityData;
    
    // console.log(supabase);


    return (
        <Link href={'/community-details'} className='comm-card white-card'>
            <div className='card-content'>
                
                
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center icon-title'>
                        <Image src={avatarSrc} className='me-2' width={56} height={56} alt='author' />
                        <div>
                            <span>@{username}</span>
                            <p className='content-font mb-0 text-start'>{description}</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center like-btn'>
                        <i className='fa fa-heart liked me-2'></i>
                        {likes}
                    </div>
                </div>

                <div className='points-list mt-4 mb-3'>
                    <div className='list'>
                        <p>Total Raise</p>
                        <p>{totalRaise}</p>
                    </div>
                    <div className='list'>
                        <p>Contribute Chain</p>
                        <p className='d-flex align-items-center'>{contributeChain}</p>
                    </div>
                    <div className='list'>
                        <p>Distribute Chain</p>
                        <p className='d-flex align-items-center'>{distributeChain}</p>
                    </div>
                </div>
                <div className='tags-list larger p-0 noposition'>
                    {tags.map((tag, index) => (
                        <span key={index} className={tag.color}>
                            {tag.label}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default CommunityCard;
