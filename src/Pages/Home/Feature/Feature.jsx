import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from '../../../assets/home/featured.jpg'
import './Feature.css'
const Feature = () => {
    return (
        <div className="feature-bg bg-fixed text-center pt-8 my-20 text-white">
            <SectionTitle subheading={'Check out it'} heading={"Featured Item"}></SectionTitle>
            <div className="flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2029</p>
                    <p className="uppercase font-semibold my-2">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusantium quasi quaerat, repudiandae harum quisquam eum illum maxime deserunt ad nemo nostrum quae dolores veritatis quidem unde magnam veniam eius in enim optio voluptas! Officia distinctio voluptatum quia quo. Fugit atque quidem consequuntur et sapiente corporis in doloremque iste numquam saepe facere harum reiciendis autem nulla esse animi iusto neque modi cumque ullam dolorem, minima vel praesentium. Eius, soluta. Corrupti consectetur eum, soluta temporibus commodi assumenda odio quae, veniam accusamus inventore quas distinctio facilis, laudantium cumque iure quos fugit. Commodi iure adipisci rem ducimus, quisquam similique aliquid consectetur est vel!</p>
                    <button className="btn btn-outline mt-2 border-0 border-b-4">Order Now</button>
                
                </div>
            </div>
        </div>
    );
};

export default Feature;