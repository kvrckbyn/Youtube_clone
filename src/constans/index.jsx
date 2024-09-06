import { AiOutlineFlag } from "react-icons/ai";
import { FiFilm, FiHelpCircle, FiSettings } from "react-icons/fi";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { IoGameControllerSharp, IoMusicalNotes, IoNewspaper } from "react-icons/io5";
import { MdHome, MdLiveTv, MdLocalFireDepartment } from "react-icons/md";
import { RiFeedbackLine, RiLightbulbLine } from "react-icons/ri";

export const categories = [
    { 
        name: "Anasayfa",
         icon: <MdHome />,
          type: "home"
    },
    {
         name: "Trendler",
        icon: <MdLocalFireDepartment />,
        type: "trending" 
    },
    {
        name:"Müzik",
        icon:<IoMusicalNotes />,
        type:"category",
    },
    {
    name:"Filmler",
    icon:<FiFilm />,
    type:"category",
    },
    { 
    name: "Oyun",
    icon:<IoGameControllerSharp />,
    type:"category",
    },
    {
        name:"Haberler",
        icon:<IoNewspaper />,
        type:"category",
    },
    {
        name:"Canlı",
        icon:<MdLiveTv />,
        type:"category",
    },
    {
        name:"Spor",
        icon:<GiDiamondTrophy />,
        type:"category",
    },
    {
        name:"Eğitici",
        icon:<RiLightbulbLine />,
        type:"category",
    },
    {
        name:"Güzellik & Kozmetik",
        icon:<GiEclipse />,
        type:"category",
        divider:true,
    },
    {
        name:"Ayarlar",
        icon:<FiSettings />,
        type:"menu",
    },
    {
        name:"Report History",
        icon:<AiOutlineFlag />,
        type:"menu",
    },
    {
        name:"Yardım",
        icon:<FiHelpCircle />,
        type:"menu",
    },
    {
        name:"Send feedback",
        icon:<RiFeedbackLine />,
        type:"menu",
    },
    ];
    