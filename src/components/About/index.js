const About = () => {
    return (
        <div id="about" 
            className="flex flex-col justify-center mt-32 h-full">

            <div className="text-left">
                <p className="font-light text-lg">Sobre</p>
                <h3 className="
                    text-blue-500 font-semibold text-2xl
                    mb-16">Um pouco sobre quem eu sou...</h3>
            </div>
            <div className="
                flex flex-col items-center
                md:flex-row md:justify-around">

                <img style={{width: '300px', marginLeft: "-80px", borderRadius: "17px"}} src="img/my.jpg" 
                alt="" 
                // className="h-96 w-48 rounded-xl"
                />

                <div className="
                    w-full flex flex-col justify-center items-center 
                    mt-10 text-start text-gray-500
                    md:w-1/2">
                    <p>
                        Me chamo Paulo Tiago mas pode me chamar somente de Tiago, tenho 23 anos, natural de Natal/RN, sou
                        formado em Análise e desenvolvimento de sistemas e trabalho como analista desenvolvedor. Atualmente tenho
                        quase 3 anos de experiência na área como desenvolvedor/analista e sigo a cada dia procurando me especializar 
                        ainda mais nas stacks que escolhi para minha carreira (Python, JavaScript, React, Django).
                    </p>
                    <p className="my-5">
                        No decorrer da minha carreira, tive bastante experiência com:</p>
                    <p>• Desenvolvimento back end em C#, Python e JavaScript</p>
                    <p>• Desenvolvimento front end com React.js e Material UI</p>
                    <p>• Automações de processos utilizando Python</p>
                    <p>• Web scraping utilizando Python e Playwright</p>
                    <p>• Criação de IA utilizando Python e Keras</p>
                    <p>• Criação de API usando Django Rest e FastApi</p>
                    <p>• Bancos de dados relacionais com Sql Server e Mysql</p>
                    <p>• Metodologias ágeis como o SCRUM</p>
                    <p className="mt-5">
                        Também sou curioso da nova tecnologia GPT e sigo estudando as possibilidades que ela oferece.</p>                    
                </div>
            </div>

        </div>
    );
};

export default About;