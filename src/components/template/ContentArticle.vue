<template>
    <div class="home-article bg-gray-200 m-2 rounded">
        <h3 class=" font-medium text-3xl ml-16 center mt-2 mb-4 text-gray-700">Design Moderno</h3>
        <div class="flex center flex-nowrap bg-gray-200 m-2">
            <p class="text-xl font-light hover:bg-blue-200 mb-6">
                "CSS Grid será suportado por vários navegadores até meados de 2017. O suporte em navegadores antigos pode ser obtido habilitando-se uma flag que permite o uso da API. Nesse caso não se esqueça de consultar e fazer referência a cada propriedade e funcionalidade da especificação para certificar-se da sua compatibilidade, bem como para obter maiores informações".
            </p>
        </div>
        <p class="text-lg font-medium text-gray-700 semibold mb-2 m-2">
            CSS Grid layout é uma especificação do W3C projetada para proporcionar um método bi-dimensional para criação de layout CSS que oferece a possibilidade de "layoutar" itens da página com uso de linhas e colunas. CSS grid poderá ser usado para obter uma infinidade de diferentes layouts. O diferencial desse método de criação de layouts reside na possibilidade de se dividir uma página em grandes regiões e de se definir o relacionamento em termos de medidas, posicionamento e camadas entre os diferentes componentes da marcação HTML.
        </p>
        <div class="content-image center m-2">
            <img src="@/assets/images/cssGrid.jpg" class="rounded" />
        </div>
        <button class=" inline-flex
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
        bg-indigo-600
        hover:bg-green-800
        focus:outline-none
        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout">Material completo</button>
    </div>  
</template>

<script>

export default {
    name: 'ContentArticle'
}
</script>
