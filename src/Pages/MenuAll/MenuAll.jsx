import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import imgMenu from '../../assets/menu/banner3.jpg'
import Menu from "../Home/Menu/Menu";

const MenuAll = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss |Menu</title>
            </Helmet>
            <Cover img={imgMenu} title='The Menu'/>
            <Menu/>
            <Cover img={imgMenu}/>
            <Menu/>
            <Cover img={imgMenu}/>
            <Menu/>
        </div>
    );
};

export default MenuAll;