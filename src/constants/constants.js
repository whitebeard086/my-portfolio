import { FaReact } from 'react-icons/fa';
import { GiButterfly } from 'react-icons/gi';
import { HiDatabase } from 'react-icons/hi';
import { GoArrowSmallRight } from 'react-icons/go';
import { RiGithubLine } from 'react-icons/ri';
import { MdOutlineOpenInNew } from 'react-icons/md';

export const projects = [
  {
    title: 'My Portfolio',
    description: "Built with Next JS and Styled Components, this is my portfolio website git repository.",
      image: '/images/portfolio.svg',
      tags: ['Next JS', "Styled Components"],
    source: 'https://github.com/whitebeard086/my-portfolio',
    visit: 'https://alexejimkaraonye.vercel.app/',
    sourceIcon: <RiGithubLine size="3rem" />,
    visitIcon: <MdOutlineOpenInNew size="3rem" />,
    id: 0,
  },
  {
    title: 'Cryptoverse',
    description:"A cryptocurrency news and general stats website that fetches real live data from Coinranking API. Built with React JS, Redux and Redux toolkit.",
    image: '/images/cryptoverse.svg',
    tags: ['React JS', 'Redux', "Ant-design"],
    source: 'https://github.com/whitebeard086/cryptoverse',
    visit: 'https://cryptoverse1.netlify.app/',
    sourceIcon: <RiGithubLine size="3rem" />,
    visitIcon: <MdOutlineOpenInNew size="3rem" />,
    id: 1,
  },
  {
    title: 'Blockchain Web App',
    description: "Blockchain app and smart contract built on Ropsten Ethereum testnet. You can send and receive test ETH on this app by connecting your Metamask wallet.",
      image: '/images/blockchain.svg',
      tags: ['React JS', 'Tailwind CSS', "Solidity", "Blockchain"],
    source: 'https://github.com/whitebeard086/krypt3.0',
    visit: 'https://kryptapp.netlify.app/',
    sourceIcon: <RiGithubLine size="3rem" />,
    visitIcon: <MdOutlineOpenInNew size="3rem" />,
    id: 2,
  },
  {
    title: 'Modern Landing Page',
    description: "A fully mobile responsive modern landing page built with React Js.",
      image: '/images/modern.svg',
      tags: ['React JS'],
    source: 'https://github.com/whitebeard086/modern-react-site',
    visit: 'https://modern-react-site.netlify.app/',
    sourceIcon: <RiGithubLine size="3rem" />,
    visitIcon: <MdOutlineOpenInNew size="3rem" />,
    id: 3,
  },
];

export const TechnologyData = [
  {
    title: "Front-End",
    technologies: ["HTML","CSS","Javascript","React.js", "Wordpress"],
    icon: <FaReact size="3rem" />,
    paragraphIcon: <GoArrowSmallRight />,
    id: 0,
  },
  {
    title: "Back-End",
    technologies: ["Node.js","ExpressJS","MongoDB"],
    icon: <HiDatabase size="3rem" />,
    paragraphIcon: <GoArrowSmallRight />,
    id: 1,
  },
  {
    title: "UI/UX",
    technologies: ["Figma","Adobe XD","Adobe Illustrator"],
    icon: <GiButterfly size="3rem" />,
    paragraphIcon: <GoArrowSmallRight />,
    id: 2,
  },
]