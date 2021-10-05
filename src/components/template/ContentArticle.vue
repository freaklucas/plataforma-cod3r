<template>
    <div class="home-article bg-gray-200 m-2 mt-2 rounded">
        <h3 class="font-medium text-3xl center mt-4 mb-4 text-gray-700 flex justify-center">
            Design Moderno
        </h3>
        <div class="flex center flex-nowrap bg-gray-200 m-2">
            <p class="text-xl font-light hover:bg-indigo-200 mb-6">
                "CSS Grid será suportado por vários navegadores até meados de 2017. O
                suporte em navegadores antigos pode ser obtido habilitando-se uma flag
                que permite o uso da API. Nesse caso não se esqueça de consultar e fazer
                referência a cada propriedade e funcionalidade da especificação para
                certificar-se da sua compatibilidade, bem como para obter maiores
                informações".
            </p>
        </div>
        <p class="text-lg font-medium text-gray-700 semibold mb-2 m-2">
            CSS Grid layout é uma especificação do W3C projetada para proporcionar um
            método bi-dimensional para criação de layout CSS que oferece a
            possibilidade de "layoutar" itens da página com uso de linhas e colunas.
            CSS grid poderá ser usado para obter uma infinidade de diferentes layouts.
            O diferencial desse método de criação de layouts reside na possibilidade
            de se dividir uma página em grandes regiões e de se definir o
            relacionamento em termos de medidas, posicionamento e camadas entre os
            diferentes componentes da marcação HTML.
        </p>
        <div class="content-image center m-2">
            <img src="@/assets/images/cssGrid.jpg" class="rounded" />
        </div>
        <button
            class="
            inline-flex
            justify-center
            mt-2
            py-2
            m-2
            mb-4
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-mono
            rounded-md
            text-white
            bg-gray-600
            hover:bg-gray-900
            focus:outline-none
            "
            >
            Material completo
        </button>
        <div class="logica-backend">
            <h3 class="font-medium text-3xl center mt-2 mb-4 text-gray-700 flex justify-center">
                Node & MongoDB
            </h3>
            <div class="flex center flex-nowrap bg-gray-200 m-2">
                <p class="text-xl font-light hover:bg-blue-200 mb-6">
                    "Node.js é um ambiente de execução multi-plataforma em JavaScript que permite aos desenvolvedores produzirem aplicaçõ               es para rede e server-side usando o JavaScript."
                </p>
            </div>
            <p class="text-lg font-medium text-gray-700 semibold mb-4 m-2"> 
                O runtime de JavaScript é constituído pelos seguintes comandos: node package manager (npm), e npx (node package extractor); onde o primeiro tem o propósito de executar código armazenado num package de nodejs, instalando o software globalmente ou localmente, já o segundo tem o propósito de instalar a nível local o código instalado globalmente. Um exemplo disso é o npx create-react-app que tem como propósito instalar a nível local um template vazio de um site de react, pronto a ser usado, através de uma fórmula instalada com npm.
            </p>
            <div class="content-image flex justify-center m-2">
                <img src="@/assets/images/mongodb.png" class="rounded" />
            </div>
            <button
                class="
                inline-flex
                justify-center
                mt-4
                py-2
                m-2
                px-4
                border border-transparent
                shadow-sm
                text-sm
                font-mono
                rounded-md
                text-white
                bg-blue-600
                hover:bg-blue-900
                focus:outline-none
                "
                >
                Material completo
            </button>
        </div>
        <div class="programacao-funcional">
            <h3 class="font-medium text-3xl center mt-2 mb-4 text-gray-700 flex justify-center">
                Programação funcional
            </h3>
            <div class="flex center flex-nowrap bg-gray-200 m-2">
                <p class="text-xl font-light hover:bg-red-100 mb-6">
                    "Programação funcional é o processo de construir software através de composição de funções puras, evitando compartilhamento de estados, dados mutáveis e efeitos colaterais. É declarativa ao invés de Imperativa Essa é uma definição do Eric Elliott ".
                </p>
            </div>
            <p class="text-lg font-extrabold text-gray-700 semibold ml-4">Arrow function</p>
            <p class="text-lg font-medium text-gray-500 semibold mb-4 m-2">
                const materials = [
                'Hydrogen',
                'Helium',
                'Lithium',
                'Beryllium'
                ];
                <br>
                console.log(materials.map(material => material.length));
                <br>
                Result: > Array [8, 6, 7, 9]
            </p>
            <p class="text-lg font-extrabold text-gray-700 semibold ml-4">Operador Spread</p> 
            <div class="content-image flex justify-center m-2"> 
                <img src="@/assets/images/spread.png" class="rounded" />
            </div>
            <button
                class="
                inline-flex
                justify-center
                mt-4
                py-2
                m-2
                px-4
                text-sm
                font-mono
                rounded-md
                text-white
                bg-red-600
                hover:bg-red-800
                focus:outline-none
                "
                >
                Material completo
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name: "ContentArticle",
};
</script>
