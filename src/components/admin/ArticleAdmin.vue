<template>
  <div class="article-admin font-mono">
    <h3 class="font-mono text-gray-800 mb-2 text-center text-3xl">
      Registre Artigos
    </h3>
    <div class="user-admin flex">
      <div class="flex-wrap ml-16">
        <form @submit.prevent="onSubmit" class="w-full center max-w-lg mr-4">
          <div class="flex-row">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                ml-12
                h-12
              "
              for="grid-first-name"
            >
              Nome:
            </label>
            <input
              class="
                appearance-none
                bg-transparent
                border-none
                w-full
                text-gray-700 text-base text-xs
                hover:bg-gray-200
                rounded-full
                mr-3
                py-3
                leading-tight
                focus:outline-none
                mb-2
              "
              type="text"
              placeholder="Informe o nome"
              aria-label="Full name"
            />
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                text-xs
                ml-12
                h-12
              "
              for="grid-first-name"
            >
              Descrição:
            </label>
          </div>
        </form>
        <form @submit.prevent="onSubmit" class="w-full center max-w-lg mr-8">
          <div class="flex flex-row mb-2">
            <input
              class="
                appearance-none
                bg-transparent
                border-none
                w-full
                text-gray-700 text-base text-xs
                hover:bg-gray-200
                rounded-full
                mr-3
                py-3
                leading-tight
                focus:outline-none
                mb-2
              "
              type="text"
              placeholder="Informe a categoria"
              aria-label="Full name"
            />
          </div>
        </form>
        <form @submit.prevent="onSubmit" class="w-full center max-w-lg mr-4">
          <div class="flex-row">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                ml-12
                h-12
              "
              for="grid-first-name"
            >
              Categoria:
            </label>
            <input
              class="
                appearance-none
                bg-transparent
                border-none
                w-full
                text-gray-700 text-base text-xs
                hover:bg-gray-200
                rounded-full
                mr-3
                py-3
                leading-tight
                focus:outline-none
                mb-2
              "
              type="text"
              placeholder="Informe a categoria"
              aria-label="Full name"
            />
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                text-xs
                ml-12
                h-12
              "
              for="grid-first-name"
            >
              Autor:
            </label>
            <form
              @submit.prevent="onSubmit"
              class="w-full center max-w-lg mr-8"
            >
              <div class="flex flex-row mb-2">
                <input
                  class="
                    appearance-none
                    bg-transparent
                    border-none
                    w-full
                    text-gray-700 text-base text-xs
                    hover:bg-gray-200
                    rounded-full
                    mr-3
                    py-3
                    leading-tight
                    focus:outline-none
                    mb-2
                  "
                  type="text"
                  placeholder="Informe o autor"
                  aria-label="Full name"
                />
              </div>
            </form>
          </div>
        </form>
                  <div class="mb-12 mt-8 pl-12">
            <button
              type="button"
              v-on:click.prevent="saveList(list)"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleAdmin",
};
</script>
