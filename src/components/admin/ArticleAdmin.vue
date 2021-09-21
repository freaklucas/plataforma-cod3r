<template>
  <div class="article-admin font-mono">
    <h3 class="font-mono text-gray-800 mb-12 text-center text-3xl">
      Registre Artigos 
    </h3>
    <div class="user-admin flex">
      <div class="flex-nowrap ml-16">
        <form 
          @submit.prevent="onSubmit"
          class="w-full center max-w-lg mr-8"
          >
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
              for="grid-first-name"
              >
              Descrição:
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
              h-12
              w-48
              mr-3
              py-1
              px-2
              mb-2
              mt-2
              leading-tight
              focus:outline-none
              "
              type="text"
              placeholder="Informe a descrição"
              aria-label="Full name" 
              />
          </div>
        </form>
        <form 
          @submit.prevent="onSubmit"
          class="w-full center max-w-lg mr-8"
          >
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
              mb-2
              ml-12
              h-12
              "
              for="grid-first-name"
              >
              Autor:
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
              placeholder="Informe o autor"
              aria-label="Full name" 
              />
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleAdmin",
};
</script>
