import {
  FaTh,
  FaRegChartBar,
  FaCommentAlt,
  FaRegClipboard,
} from "react-icons/fa"
import { BiImageAdd } from "react-icons/bi"

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  // {
  //   title: "Reports",
  //   icon: <FaRegClipboard />,
  //   path: "/reports",
  // },
  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/profile-update",
      },
    ],
  },
  {
    title: "Contact Innovia",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
]

export default menu
