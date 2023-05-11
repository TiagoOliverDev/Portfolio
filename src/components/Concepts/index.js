import { FaPencilRuler } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { MdDevicesOther } from "react-icons/md";

const Concepts = () => {
    return (
        <div id="projects" className="
            flex flex-col justify-center mt-32 h-full">

            <div className="flex flex-col text-left">

                <p className="font-light text-lg">
                    Principais projetos</p>

                <h3 className="
                    text-blue-500 font-semibold text-2xl
                    mb-16">
                    Aqui irei falar um pouco sobre 
                    alguns dos principais projetos
                    que participei ao longo desses "quase 3 anos" de carreira!
                </h3>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center">

                <div className=" flex flex-col justify-center 
                    w-full p-2 h-96 rounded-md md:w-80
                    text-left shadow-lg shadow-gray-200 md:w-3/3
                    dark:shadow-md dark:shadow-gray-500">

                    {/* <i className="text-8xl text-blue-500"
                    ><FaPencilRuler /></i> */}

                    <h3 className="text-2xl font-semibold py-2">
                        Senac empregabilidade</h3>
                    <p className="text-left text-gray-500">
                        Projeto criado para empresas divulgarem vagas de emprego para alunos e ex alunos do Senac. 
                        Nesse projeto participei da criação do front-end de várias páginas do site e da área administrativa, 
                        também participei bastante na parte do back-end e das consultas SQL. Sistema feito utilizando c#, .Net e SqlServer.
                    </p>
                    <br/>
                    <span>Acesse aqui: </span><a className="text-blue-500" href="https://empregabilidade.rn.senac.br/">empregabilidade.rn.senac.br
                    </a>
                   
                    <span>Repositório: </span><a className="text-blue-500" href="##">Não disponível fora da empresa!
                    </a>
                   
                </div>


                <div className=" flex flex-col justify-center 
                    w-full p-2 h-96 rounded-md md:w-80
                    text-left shadow-lg shadow-gray-200 md:w-3/3
                    dark:shadow-md dark:shadow-gray-500">

                    {/* <i className="text-8xl text-blue-500"
                    ><FaPencilRuler /></i> */}

                    <h3 className="text-2xl font-semibold py-2">
                        Deepshift</h3>
                    <p className="text-left text-gray-500">
                        Projeto criado para o ramo de petróleo, mais precisamente na área de ciência e 
                        engenharia, sendo ele um sistema bem completo onde podemos analisar vários tipos de dados de petróleo, treinar modelos de dados com diversas ferramentas, entre outras funcionalidades. Aqui utilizei React.JS, Material UI, SqLite, Python e FastApi.
                    </p>
                    <br/>
                    <span>Acesse aqui: </span><a className="text-blue-500" href="https://deepshift.solpe.com.br/">deepshift.solpe.com.br
                    </a>                   
                    <span>Repositório: </span><a className="text-blue-500" href="##">Não disponível fora da empresa!
                    </a>
                   
                </div>
                <div className=" flex flex-col justify-center 
                    w-full p-2 h-96 rounded-md md:w-80
                    text-left shadow-lg shadow-gray-200 md:w-3/3
                    dark:shadow-md dark:shadow-gray-500">

                    {/* <i className="text-8xl text-blue-500"
                    ><FaPencilRuler /></i> */}

                    <h3 className="text-2xl font-semibold py-2">
                        Automação UVT</h3>
                    <p className="text-left text-gray-500">
                        Automação criada para uma empresa de contabilidade, onde foi necessário a criação de uma IA para quebra de um CAPTCHA. Com os dados de acesso injetado
                        a automação loga, quebra o CAPTCHA e raspa diversos dados de mais de 200 empresas cliente e ao final faz POST de todos os dados para uma API própria da empresa. Aqui usei Python, Playwright, Keras e Mysql.
                    </p>
                    <br/>
                    <span>Acesse aqui: </span><a className="text-blue-500" href="##">Somente em linha de comando
                    </a>          
                    <span>Repositório: </span><a className="text-blue-500" href="https://github.com/TiagoOliverDev/Extract-automation-uvt">Disponível aqui!
                    </a>
                   
                </div>

                <div className=" flex flex-col justify-center 
                    w-full p-2 h-96 rounded-md md:w-80
                    text-left shadow-lg shadow-gray-200 md:w-3/3
                    dark:shadow-md dark:shadow-gray-500">

                    <h3 className="text-2xl font-semibold py-2">
                        Automação Directa</h3>
                    <p className="text-left text-gray-500">
                        Criada e programada para rodar toda segunda e todo dia 28 de cada mês. Nessa automação recebemos os dados de acesso, injetamos na automação, vamos até o site Directa, logamos e fazemos todo o processo para baixar todas as notas fiscais da empresa logada. 
                        Feito isso jogamos essas notas em uma API e em uma rede privada da empresa. Aqui utilizei Python, Playwright e Mysql.
                    </p>
                    <br/>
                    <span>Acesse aqui: </span><a className="text-blue-500" href="##">Somente em linha de comando
                    </a>          
                    <span>Repositório: </span><a className="text-blue-500" href="https://github.com/TiagoOliverDev/directa-automation">Disponível aqui!
                    </a>
                   
                </div>

            </div>
        </div>
    );
};

export default Concepts;