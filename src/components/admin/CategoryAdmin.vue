<template>
  <div class="category-admin">
    <h3 class="font-mono text-gray-800 mb-12 text-center">
      Registre uma categoria
    </h3>
    <div class="flex">
      <div class="flex-nowrap ml-16">
        <form class="w-full center max-w-lg mr-8">
          <div class="flex flex-row -mx-3 mb-6">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
                ml-12
                h-12
              "
            >
              Nome:
            </label>
            <input
              class="
                appearance-none
                bg-transparent
                border-none
                w-full
                text-gray-700 text-base
                hover:bg-gray-200
                rounded-full
                mr-3
                py-1
                px-2
                mb-2
                mt-2
                leading-tight
                focus:outline-none
              "
              type="text"
              placeholder="Informe o nome"
              aria-label="Full name"
            />
          </div>
          <div class="flex flex-row">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
                h-12
                ml-8
              "
            >
              <span class="text-gray-800 text-xs"> Categoria Pai: </span>
                <div class="relative inline-block w-full text-gray-700 mb-12">
                  <select class="
                    w-full h-10 pl-3 pr-6 text-base 
                    placeholder-gray-800 
                    border rounded-lg appearance-none 
                    focus:shadow-outline
                    font-bold
                    rounded-full
                    mt-2
                    " 
                    placeholder="Regular input"
                  >
                    <option>Javascript</option>
                    <option>Tailwind</option>
                    <option>Typescript</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 
                      111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd">
                      </path>
                    </svg>
                  </div>
                </div>
            </label>
          </div>
          <div class="mb-4 mt-4 pl-12">
            <button
              type="button"
              class="
                inline-flex
                justify-center
                py-2
                px-5
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                bg-indigo-600
                hover:bg-indigo-800
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700
              "
            >
              Salvar
            </button>
            <button
              type="submit"
              class="
                inline-flex
                justify-center
                py-2
                px-4
                ml-4
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                bg-gray-600
                hover:bg-black
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              "
            >
            Cancelar
          </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryAdmin",
};
</script>
