import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://dmtecabiklgxxoketgfy.supabase.co/storage/v1/object/public/personal-website/ZestBuy.png",
    url: "https://zestbuy.vercel.app/",
    github: "https://github.com/YangyangLi-dev/zestbuy",
    title: "ZestBuy",
    text: "ZestBuy is a high-performance e-commerce platform for tech enthusiasts, built with Next.js and Supabase, featuring Google authentication and Stripe payments for a seamless shopping experience.",
  },
  {
    id: nanoid(),
    img: "https://dmtecabiklgxxoketgfy.supabase.co/storage/v1/object/public/personal-website/HotelOps.png?t=2024-09-09T15%3A22%3A45.162Z",
    url: "https://hotel-ops.vercel.app/",
    github: "https://github.com/YangyangLi-dev/hotel-ops",
    title: "HotelOps",
    text: "Hotel Ops is a streamlined management system built with React.js and Supabase, empowering hotel staff to efficiently handle bookings, guest services, and internal operations.",
  },
  {
    id: nanoid(),
    img: "https://dmtecabiklgxxoketgfy.supabase.co/storage/v1/object/public/personal-website/PizzaPick.png?t=2024-09-09T15%3A26%3A10.890Z",
    url: "https://pizzapick.vercel.app/",
    github: "https://github.com/YangyangLi-dev/pizzapick",
    title: "PizzaPick",
    text: "PizzaPick is a mouth-watering pizza ordering platform built with React.js and Redux Toolkit, offering users a seamless experience to customize, cart, and order their perfect pizzas.",
  },
];
