import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
    const { theme, setTheme } = useTheme();
  
    const changeTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };
    return(
        <>
        <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Yifan</span> Qu
         </h3>
        </>
    )
}

export default Sidebar;
