import { Menu } from "@/types/menu";
const menuData: Menu[] = [
  {
    id: 1,
    title: "Acasă",
    newTab: false,
    path: "/",
 
  },
  {
    id: 5,
    title: "Cauta",
    newTab: false,
    path: "/cauta",
  },
  {
    id: 2,
    title: "Profesioniști ",
    newTab: false,
    submenu: [
      {
        id: 301,
        title: "Amenajari gradini",
        newTab: false,
        path: "/amenajari-gradini",
      },
      {
        id: 302,
        title: "Intretinere gradini",
        newTab: false,
        path: "/intretinere-gradini",
      },
      {
        id: 303,
        title: "Plante ornamentale",
        newTab: false,
        path: "/plante-ornamentale",
      },
  

    
    ],
  },

  {
    id: 4,
    title: "Despre noi",
    newTab: false,
    submenu: [
      {
        id: 301,
        title: "Despre platforma",
        newTab: false,
        path: "/despre-noi",
      },
      {
        id: 302,
        title: "Cum funcționează",
        newTab: false,
        path: "/cum-functioneaza",
      },
      {
        id: 303,
        title: "Politica de cookie-uri",
        newTab: false,
        path: "/politica-de-cookie",
      },
  

      {
        id: 304,
        title: "Politica de confidențialitate",
        newTab: false,
        path: "/politica-de-confidentialitate",
      },
    ],
  },



  {
    id: 6,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },

];

export default menuData;
