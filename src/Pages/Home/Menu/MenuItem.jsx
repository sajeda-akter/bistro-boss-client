
const MenuItem = ({menu}) => {
    const {name,image,price,recipe}=menu
    return (
        <div className="flex space-x-4 p-4 border border-indigo-500 rounded my-4 ">
            <img className="w-44" style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h2 className="font-bold">{name}</h2>
                <p className="w-72">{recipe}</p>
            </div>
            <h3 className="text-orange-800 text-3xl font-semibold">{price}</h3>
        </div>
    );
};

export default MenuItem;