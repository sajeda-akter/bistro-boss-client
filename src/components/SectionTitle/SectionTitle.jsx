
const SectionTitle = ({heading,subheading}) => {
    return (
        <div className="w-96 mx-auto my-12 text-center">
            <p className="text-orange-700 mb-2">---{subheading}---</p>
            <h3 className="text-4xl uppercase border border-t-4 border-b-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;