<template>
  <div class="container">
    <h3 class="font-mono text-gray-800 mb-12 text-center">Registre como usuário</h3>
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
              v-model="people.name"
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
              Email:
            </label>
            <input
              v-model="people.email"
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
              placeholder="Informe o email"
              aria-label="Full name" 
            />
          </div>
        </form>
      </div>
    </div>
    <div class="flex-row-reverse ml-16">
      <form class="w-full center max-w-lg mr-8">
       <div class="mb-4 ml-16">
          <button
            v-on:click.prevent="savePeople(people)"
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
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Nome
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Código
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Caminho
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(people, idx) in peoples" :key="idx">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ people.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ people.email }}  
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">001</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="
                      px-2
                      inline-flex
                      text-sm
                      leading-5
                      font-semibold
                      rounded-full
                      bg-green-100
                      text-green-800
                    "
                  >
                    Js/Vuejs
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "UserAdmin",
  data() {
    return {
      peoples: [],
      people: {
        name: '',
        email: '',
      }, 
    };
  },
  created() {
   this.peoples = JSON.parse(localStorage.getItem('listsPeople'))
  },
  methods: {
    savePeople(people) {
      let peoples = localStorage.getItem('listsPeople')
      if(peoples) {
        peoples = JSON.parse(peoples)
        peoples.push(people)
      }
      else {
        peoples = [people]
      } 
      this.peoples = peoples
      localStorage.setItem('listsPeople', JSON.stringify(peoples))

      this.$toasted.global.defaultSuccess()
    },
  }
};

</script>
