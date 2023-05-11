import Carrossel from "../Carrossel";

const Skills = () => {
    return (
        <div id="elemento" className="
            flex flex-row items-center justify-between
            mt-32 h-full">

            <img style={{height: "300px"}} src="img/python.jpeg" alt="" className="hidden md:block md:h-full w-72 rounded-xl" />

            <div className="w-full md:w-1/2 text-left font-semibold text-3xl">
                <p className="font-light text-lg mb-1">
                   Skills
                </p>

                <h2 className="text-start font-bold uppercase">Principais tecnologias que tenho 
                    <span className="text-blue-500 uppercase font-bold"> experiência </span>                   
                </h2>

                <Carrossel />
            </div>

        </div>
    );
};

export default Skills;