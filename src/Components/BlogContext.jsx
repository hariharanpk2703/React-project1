import React, { createContext, useState } from "react";

export const BlogContext = createContext();

const TourDetails = (props) => {
    let [Tourist, setTourist] = useState([

        {
            id: "1",
            name: "kashmir",
            image: "https://tse1.mm.bing.net/th?id=OIP.iW-fa75MkWoCdmPwyJcnSwHaE7&pid=Api&P=0&w=260&h=173",

            info: "Jammu & Kashmir, a piece of heaven on earth, is the 19th largest state in India and it is located mostly all in the Himalayan mountains. ",
            date: "Tourism /29 may 2022",
            description: "Some major tourist attractions in Jammu and Kashmir are Srinagar, the Mughal Gardens, Gulmarg, Pahalgam, Patnitop and Jammu. Every year, thousands of Hindu pilgrims visit holy shrines of Vaishno Devi and Amarnath which has had significant impact on the state's economy.",
        },
        {
            id: "2",
            image: "http://wirally.com/wp-content/uploads/2018/11/6-Reasons-To-Visit-Lambasingi-Kashmir-of-Andhra-Pradesh-This-Winter-Web.jpg",
            name: "Lammasingii",
            info: "Lambasingi is famous for its tea and coffee plantations along with little apple and strawberry farms. Moreover, the place is abounding with a variety of wildlife, flora, and fauna. ",
            date: "Tourism / 29 May 2022 ",
            description: "The region was formerly densely covered in forests and known in the past to have supported tigers. The region is known for its diversity of birdlife. Apart, this little hamlet of Lambasingi is home to an isolated tribal community. ",
        },
        // {
        //     id: "3",
        //     image: "https://cdn1.goibibo.com/voy_ing/t_fs/india-goa-147105343003o.jpeg",
        //     name: "Goa-Holiday place to enjoy",
        //     info: "Goa is famous in India for a holiday destination, Goa Tourism & Travels is truly a traveler’s paradise. A perfect blend of Indian and Portuguese cultures.",
        //     date: "Tourism / 29 May 2022",
        //     description: "The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland.",
        // },
        {
            id: "3",
            image: "https://4.bp.blogspot.com/-j1rGJ7HQn1M/UtfKuF3yPRI/AAAAAAAAEVU/N2lUwaTodtw/s1600/alappuzha-in-kerala.jpg",
            name: "Kerala-Gods own Country",
            info: "Kerala, located on the south-western tip of India, enjoys unique geographical features that have made it one of the most sought-after tourist destinations in Asia.",
            date: "Tourism / 29 May 2022",
            description: "Kerala is a popular destination for both domestic as well as foreign tourists. Kerala is well known for its beaches, backwaters in Alappuzha and Kollam, mountain ranges and wildlife sanctuaries. Other popular attractions in the state include the beaches at Kovalam, Muzhappilangad",
        },

        {
            id: "4",
            image: "https://cdn1.goibibo.com/voy_ing/t_fs/india-goa-147105343003o.jpeg",
            name: "Goa-Holiday place to enjoy",
            info: "Goa is famous in India for a holiday destination, Goa Tourism & Travels is truly a traveler’s paradise. A perfect blend of Indian and Portuguese cultures.",
            date: "Tourism / 29 May 2022",
            description: "The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland.",
        },
    ]);
    let [Fitness, setFitness] = useState([

        {
            id: "5",
            image: "https://tse2.mm.bing.net/th?id=OIP.FiqbMTlxAQYypvwXzIAPqgHaDv&pid=Api&P=0&w=350&h=176",
            name: "Swimming",
            info: "Swimming is a great aerobic workout for people with most types of arthritis. It can take the load off your joints and help prevent injuries.",
            date: "Fitness/ 25 May 2022",
            description: "Swimming has many more benefits that those obvious advantages seen on the surface; its improvements to overall health go much deeper.Swimming improves muscle definition and strength. Swimmers gain muscle strength throughout the entire body.",
        },
        {
            id: "6",
            image: "https://i.pinimg.com/736x/3a/a5/5c/3aa55c890be15c659e9defc2c213bffb.jpg",
            name: "Running",
            info: "While there exists the potential for injury while running (just as there is in any sport), there are many benefits. Some of these benefits include potential weight loss, improved cardiovascular",
            date: "Fitness/25 May 2022",
            description: "Running is one of the best ways to boost your overall health. According to medical research, you can increase on your good cholesterol levels by running every day. It is also a great way to improve on lung function. ",
        },
        {
            id: "7",
            name: "Lifehack",
            // "author": "Lindsey Ellefson",
            info: "How to Stop Yourself From Throwing Up",
            description: "Ugh, here it comes. You feel kind of hot and sticky. Your stomach churns. Your mouth tastes funny. You know you’re going to throw up—imminently. Can you stop it before it happens? Or at least make it less terrible than it needs to be? Whether you’re battling …",
            // "url": "https://lifehacker.com/how-to-stop-yourself-from-throwing-up-1848893119",
            image: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7d716c2b86ee05ff13c56b6ebdc84704.jpg",
            date: "Fitness/25 May 2022",
            // "content": "Ugh, here it comes. You feel kind of hot and sticky. Your stomach churns. Your mouth tastes funny. You know youre going to throw upimminently. Can you stop it before it happens? Or at least make it l… [+2994 chars]"
        },
        {
            id: "8",
            name: "IPL News",
            // "author": "NDTV Sports Desk",
            info: "IPL 2022 Final, GT vs RR Live Score: Hardik Pandya Stars As Gujarat Titans Restrict Rajasthan Royals To 130/9 - NDTV Sports",
            description: "Gujarat Titans vs Rajasthan Royals Score Updates: Chasing a target of 131, Gujarat Titans are a wicket down against Rajasthan Royals in the final of IPL 2022 at the Narendra Modi Stadium in Ahmedabad",
            // "url": "https://sports.ndtv.com/ipl-2022/gt-vs-rr-ipl-2022-final-live-updates-scoreboard-gujarat-titans-vs-rajasthan-royals-live-score-3019778",
            image: "https://c.ndtvimg.com/2022-05/gouspfdg_prasidh-krishna-bcciipl_625x300_28_May_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
            date: "Fitness/25 May 2022",
            // "content": "IPL 2022 Final, GT vs RR Live Updates: Chasing a target of 131, Gujarat Titans are a wicket down against Rajasthan Royals in the final of IPL 2022 at the Narendra Modi Stadium in Ahmedabad. Prasidh K… [+1601 chars]",
        },
    ]);
    let [Technology, setTechnology] = useState([
        {
            id: "9",
            name: "Hindustan Times",
            // "author": "HT Tech",
            info: "Tau Herculids meteor shower set to dazzle Earth! NASA shares when and how to watch the meteor shower live - HT Tech",
            description: "Stargazers can watch the Tau Herculids meteor shower above Earth soon! NASA shared a detailed note related to the Tau Herculids meteor shower expected on May 30 night.",
            // "url": "https://tech.hindustantimes.com/photos/tau-herculids-meteor-shower-set-to-dazzle-earth-nasa-shares-when-and-how-to-watch-the-meteor-shower-live-71653826482191.html",
            image: "https://images.hindustantimes.com/tech/img/2022/05/29/1600x900/2_1653826728755_1653826862639.jpg",
            date: 'Technology/29 May 2022',
            // "content": "Top SectionsExplore Tech\r\n Copyright © HT Media Limited All rights reserved.",
        },
        {
            id: "10",
            name: "The Siasat Daily",
            // "author": "ANI",
            info: "Hidden trove of massive black holes found: Research - The Siasat Daily",
            description: "Chappel Hill: A previously overlooked treasure trove of massive black holes in dwarf galaxies have been found by a team led by researchers at the University of North Carolina at Chapel Hill. The newly discovered black holes offer a glimpse into the life story…",
            // "url": "https://www.siasat.com/hidden-trove-of-massive-black-holes-found-research-2336961/",
            image: "https://cdn.siasat.com/wp-content/uploads/2021/07/Black-Hole.jpg",
            date: 'Technology/29 May 2022',
            // co: "Chappel Hill: A previously overlooked treasure trove of massive black holes in dwarf galaxies have been found by a team led by researchers at the University of North Carolina at Chapel Hill.\r\nThe new… [+4963 chars]"
        },
        // {
        //     id: "11",
        //     name: "The Verge",
        //     // "author": "Victoria Song",
        //     info: "How to track your menstrual cycles on a smartwatch",
        //     description: "There’s no shortage of period tracking apps for your phone, but a few smartwatches and fitness trackers — the Apple Watch, Fitbits, Garmins, and Samsung Galaxy Watches — will also allow you to view your cycle and input data straight from your wrist.",
        //     // "url": "https://www.theverge.com/23058888/smartwatch-menstrual-cycle-how-to",
        //     image: "https://cdn.vox-cdn.com/thumbor/LvOOv2IcjmmGSYx-S7TRMuadcL4=/0x292:2040x1360/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23440688/IMG_2897.jpg",
        //     date: 'Technology/29 May 2022',
        //     // "content": "Apple introduced Cycle Tracking on the Series 5. | Photography by Victoria Song / The Verge\r\n\n \n\n Although modern smartwatches and fitness trackers have been around for almost a decade, period tracki… [+9738 chars]"
        // },

        {
            id: "11",
            image: "https://tse4.mm.bing.net/th?id=OIP.9OknM8aS9y2KKawnSHDCfgAAAA&pid=Api&P=0&w=231&h=171",
            name: "Agricultural-Technology",
            info: "This technology refers to the technologies for machine production that are utilized on a farm.",
            date: 'Technology/29 May 2022',
            description: " Mechanical processing of soil so that it is in the proper physical condition for planting is usually referred to as tilling; adding nutrients and trace elements is called fertilizing.application of techniques to control the growth and harvesting of animal and vegetable products",
        },

        {
            id: "12",
            name: "The Verge",
            // "author": "Victoria Song",
            info: "How to track your menstrual cycles on a smartwatch",
            description: "There’s no shortage of period tracking apps for your phone, but a few smartwatches and fitness trackers — the Apple Watch, Fitbits, Garmins, and Samsung Galaxy Watches — will also allow you to view your cycle and input data straight from your wrist.",
            // "url": "https://www.theverge.com/23058888/smartwatch-menstrual-cycle-how-to",
            image: "https://cdn.vox-cdn.com/thumbor/LvOOv2IcjmmGSYx-S7TRMuadcL4=/0x292:2040x1360/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23440688/IMG_2897.jpg",
            date: 'Technology/29 May 2022',
            // "content": "Apple introduced Cycle Tracking on the Series 5. | Photography by Victoria Song / The Verge\r\n\n \n\n Although modern smartwatches and fitness trackers have been around for almost a decade, period tracki… [+9738 chars]"
        },

    ]);

    let [Bollywood, setBollywood] = useState([
        
            {
                id: "13",
                name: "NDTV News",
                
                info : "Aap Mahapurush Ho: Director Advait Chandan Shares A Heartfelt Note For Aamir Khan Ahead Of Laal Singh Chaddha Trailer Launch - NDTV",
                
                date: 'Bollywood /29 May 2022',
                image: "https://c.ndtvimg.com/2022-05/9566qg08_aamir-khan_625x300_29_May_22.jpg",
                
                description: "Advait Chandan shared a BTS picture of Aamir Khan from the sets. (courtesy: advaitchandan)As the time is nearing for the launch ofLaal Singh Chaddha trailer, the makers are keeping the momentum hig… [+2109 chars]",
        },
        {
            id: "14",
            image: "https://english.cdn.zeenews.com/sites/default/files/2022/05/23/1045604-bhool-bhulaiyaa-2-1.png",
            name: "Bhool Bhulaiyaa 2 ",
            info: "Actors Kartik Aaryan and Kiara Advani starrer ‘Bhool Bhulaiyaa 2’ has broken the dry spell of Hindi films at the box office by minting more than Rs 50 crores in the first three days of its release.",
            date: 'Bollywood /29 May 2022',
            description: " On Saturday the movie collected Rs 18.34 crore. According to early trends, the film has collected around Rs 22 to 23 crore on Sunday - making its first three days collection rise past Rs 50 crore mark."
        },
        {
            id: "15",
            image: "https://images.squarespace-cdn.com/content/v1/5d45b55d7563de000169a046/1648662793126-HNO7VYE2WDD90YG25IHL/_123677252_kfposter.jpg?format=1500w",
            name: "The Kashmir Files",
            info: "It is the first time that the plight of Kashmiri Hindus has been depicted in Hindi films, without somehow showing excuses and extenuating circumstances.",
            date: 'Bollywood/ 29 May 2022',
            description: "The Kashmir Files is nationalistic propaganda at its finest, presenting a misleading and dangerously one-sided narrative that exaggerates figures, ignores conflicting details, and obscures inconvenient truths to push a blatantly politicized agenda.",
        },
        {
            id: "16",
            name: " Shah Rukh Khan's son",
            // "author": "Associated Press",
            info: "Bollywood star Shah Rukh Khan's son cleared of drug charges",
            description: "Bollywood megastar Shah Rukh Khan’s son was cleared on Friday in a drug case involving a party on a luxury cruise ship, with no evidence showing he possessed...",
            // "url": "https://news.yahoo.com/bollywood-star-shah-rukh-khans-131413527.html",
            image: "https://s.yimg.com/ny/api/res/1.2/hnRIYvLgNpDUH4Sr2Qb54w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NTM-/https://s.yimg.com/uu/api/res/1.2/2a07w_HVUtY0eVwHSwRaXA--~B/aD0xMjczO3c9MjAzMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/ap.org/fa3e8c6f4ca6390b4ab9e2e80cf2dcab",
            date: 'Bollywood/ 29 May 2022',
            // "content": "NEW DELHI (AP) Bollywood megastar Shah Rukh Khans son was cleared on Friday in a drug case involving a party on a luxury cruise ship, with no evidence showing he possessed banned drugs or was involve… [+1301 chars]"
        },
    ]);
    let [Food, setFood] = useState([
        {
            id: "17",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/1280px-Hyderabadi_Chicken_Biryani.jpg",
            name: "Hyderabadi-biriyani",
            info: "Hyderabadi biryani, also known as Hyderabadi dum biryani, is a style of biryani from Hyderabad, India made with basmati rice and meat (mostly chicken, Lamb Meat).",
            date: "Food/25 May 2022",
            description: "Originating in the kitchens of the Nizam of Hyderabad, it combines elements of Hyderabadi and Mughlai cuisines. Hyderabad biryani is a key dish in Hyderabadi cuisine.Taste is fantastic when compared to other states biriyani",
        },
        {
            id: "18",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sapaketti_phat_khi_mao.jpg/408px-Sapaketti_phat_khi_mao.jpg",
            name: "Noodles",
            info: "Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings.",
            date: "Food/25 May 2022",
            description: "Noodles can be refrigerated for short-term storage or dried and stored for future use. Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried.",
        },
        {
            id: "19",
            image: "http://3.bp.blogspot.com/-GQTDywNt4Ks/U0dX3UPasgI/AAAAAAAAhy0/V5xXKzGXx2Q/s1600/Idli.jpg",
            name: "Idly",
            info: "Idli or idly are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. ",
            date: "Food/25 May 2022",
            description: "Since plain idlis are mild in taste, a condiment is considered essential. Idlis are often served with chutneys (coconut based), sambar and Medu vada. However, this varies greatly by region and personal taste, it is also often served with kaara chutney (onion based) or spicy fish curries",
        },
        {
            id: "20",
            image: "https://diff.wiki/images/5/58/Roti.jpg",
            name: "Chapathi(Roti)",
            info: "Chapathi also known as roti, rotli, safati, shabaati, phulka, is an unleavened flatbread originating from the Indian subcontinent and staple in India, Nepal.",
            date: "Food/25 May 2022",
            description: "Chapatis are one of the most common forms of wheat bread which are a staple food in the Indian subcontinent. The carbonized wheat grains discovered at the excavations at Mohenjo-daro are of a similar variety to an endemic species of wheat still to be found in India today. ",
        },
 ]);
    return (
        <BlogContext.Provider value={{
            value1: [Tourist, setTourist],
            value2: [Fitness, setFitness],
            value3: [Technology, setTechnology],
            value4: [Bollywood, setBollywood],
            value5: [Food, setFood]
        }} >
            {props.children}
        </BlogContext.Provider>
    )
}
export default TourDetails;

