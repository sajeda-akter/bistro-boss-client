import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const Menu = () => {
    const [menus,setMenu]=useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const menuItems=data.filter(item=>item.category==='popular');
            setMenu(menuItems)
        })
    },[])
    return (
        <div>
<SectionTitle

heading={'From our menu'}
subheading={'Polular Items'}
></SectionTitle>
<div className="grid md:grid-cols-2 gap-4">
{
    menus.map(menu=>
    <MenuItem menu={menu}  
    key={menu.id}
    />
    )
}

</div>
<Link to={'/menu'}><button className="btn btn-outline mt-2 border-0 border-b-4 w-52 ml-96 bg-slate-200">View Full Menu</button>
</Link>
        </div>
    );
};

export default Menu;