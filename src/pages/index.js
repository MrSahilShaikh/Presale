import Head from "next/head";
import MainLayout from "@/layouts/main/nav/MainLayout";
import Banner from "@/componants/Banner";
import Community from "@/componants/Community";
import LiveDeals from "@/componants/LiveDeals";
import TopCommunities from "@/componants/TopCommunities";
import Discover from "@/componants/Discover";
import Seo from "@/componants/Seo";
import { useRouter } from "next/router";

Home.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function Home() {
    const router = useRouter();
    
    const metaData = {
        title: 'Launchpad - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'Launchpad - Unleash the data',
        url: router.asPath,
    };

    return (
        <>
            <Seo {...metaData} />
            <Banner />
            <Community />
            <LiveDeals />
            <TopCommunities />
            <Discover />
        </>
    );
}
