import {FaGithub,FaTelegram,FaDiscord,FaTwitter} from 'react-icons/fa'
import {AiFillCheckCircle,AiFillCloseCircle} from 'react-icons/ai'
const footData =[
    {
        social:'Github',
        path:'',
        icon:<FaGithub/>
    },
    {
        social:'Twiter',
        path:'',
        icon:<FaTwitter/>
    },
    {
        social:'Telegram',
        path:'',
        icon:<FaTelegram/>
    },
    {
        social:'Discord',
        path:'',
        icon:<FaDiscord/>
    },
]

const NavData=[
    {
        id:0,
        name:'Introduction',
        path:'/'
    },
    {
        id:0,
        name:'About',
        path:'/'
    },
    {
        id:0,
        name:'Partner',
        path:'/'
    },
    {
        id:0,
        name:'Use Case',
        path:'/'
    },
    {
        id:0,
        name:'',
        path:'/'
    },
    {
        id:0,
        name:'Contact',
        path:'/'
    }
]
const statsData=[
    {
        img:require('./asset/images/stats.svg').default,
        h1:'$30B',
        para:'Digital Currency Exchange'
    },
    {
        img:require('./asset/images/stats.svg').default,
        h1:'$30B',
        para:'Digital Currency Exchange'
    },
    {
        img:require('./asset/images/stats.svg').default,
        h1:'$30B',
        para:'Digital Currency Exchange'
    },
]

const BorrowData ={
    title:'BORROW NOW AT JUST 0% INTEREST',
    para:`Join our Loyalty Program and get funds at no cost! Just enable our
    Low-Interest Borrowing feature to automatically keep your LTV ratio
    below 20% and enjoy our best rates.`,
    img:require('./../component/asset/images/borrowImg.svg').default
}
const whyDefiData ={
    title:'WHY USE DEFI CONNECT',
    para:`Get as much or as little as you want, whenever you want with the most flexible
    crypto credit line out there.`,
    img:require('./../component/asset/images/borrowImg.svg').default,
    img1:require('./../component/asset/images/why.svg').default,
    img2:require('./../component/asset/images/why1.svg').default,
}

const whyDefiContent =[
 {
    itemFirst:'',
    itemSecond:'Instant Crypto Credit Lines',
    itemLast:'Conventional Loans'
 },
 {
    itemFirst:'Opportunity to grow your portfolio',
    itemSecond:<AiFillCheckCircle />,
    itemLast:<AiFillCloseCircle />
 },
 {
    itemFirst:'Lower interest rates',
    itemSecond:<AiFillCheckCircle/>,
    itemLast:<AiFillCloseCircle/>
 },
 {
    itemFirst:'No origination fees',
    itemSecond:<AiFillCheckCircle/>,
    itemLast:<AiFillCloseCircle/>
 },
 {
    itemFirst:'Tax-efficiency',
    itemSecond:<AiFillCheckCircle/>,
    itemLast:<AiFillCloseCircle/>
 },
 {
    itemFirst:'Instant approval',
    itemSecond:<AiFillCheckCircle/>,
    itemLast:<AiFillCloseCircle/>
 },
 {
    itemFirst:'No paperwork to fill',
    itemSecond:<AiFillCheckCircle/>,
    itemLast:<AiFillCloseCircle/>
 },
 {
    itemFirst:'No monthly repayments',
    itemSecond:<AiFillCheckCircle/>,
    itemLast:<AiFillCloseCircle/>
 },
 {
    itemFirst:'No impact on credit score',
    itemSecond:<AiFillCheckCircle/>,
    itemLast:<AiFillCloseCircle/>
 }
]

const BorrowInputData={
    title:'See How Much you  Can  BORROW',
    para:`Enter the amount you’d like to borrow to find out how much collateral is required.`
}
export  {footData,NavData,statsData,BorrowData,whyDefiData,whyDefiContent,BorrowInputData}