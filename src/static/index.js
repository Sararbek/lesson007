import dress001 from '../assets/dress001.png'
import dress002 from '../assets/dress002.png'
import dress003 from '../assets/dress003.png'
import dress004 from '../assets/dress004.png'

import { FaTwitter, FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";

import card001 from "../assets/card001.png";
import card002 from "../assets/card002.png";
import card003 from "../assets/card003.png";
import card004 from "../assets/card004.png";
import card005 from "../assets/card005.png";

export const dressStyles = [
    {
        id: 1,
        title: 'Casual',
        imgUrl: dress001,
    },
    {
        id: 2,
        title: 'Formal',
        imgUrl: dress002,
    },
    {
        id: 3,
        title: 'Party',
        imgUrl: dress003,
    },
    {
        id: 4,
        title: 'Gym',
        imgUrl: dress004,
    },
]

export const footerDesc = {
    logo: 'shop.co',
    desc: 'We have clothes that suits your style and which you’re proud to wear. From women to men.',
    social: [
        {
            id: 1,
            title: 'Twitter',
            iconUrl: FaTwitter,
        },
        {
            id: 2,
            title: 'Facebook',
            iconUrl: FaFacebookF,
        },
        {
            id: 3,
            title: 'Instagram',
            iconUrl: FaInstagram,
        },
        {
            id: 4,
            title: 'GitHub',
            iconUrl: FaGithub,
        },
    ]
}

export const footerLinks = [
    {
        id: 1,
        linksTitle: 'Company',
        links: [
            'About', 'Features', 'Works', 'Career'
        ]
    },
    {
        id: 2,
        linksTitle: 'Help',
        links: [
            'Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'
        ]
    },
    {
        id: 3,
        linksTitle: 'FAQ',
        links: [
            'Account', 'Manage Deliveries', 'Orders', 'Payments'
        ]
    },
    {
        id: 4,
        linksTitle: 'Resources',
        links: [
            'Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'
        ]
    }
]

export const footerCards = [
    card001, card002, card003, card004, card005
]