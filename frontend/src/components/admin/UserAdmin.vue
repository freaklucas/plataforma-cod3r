<template>
  <div class="container">
    <div class="user-admin flex">
      <div class="flex-nowrap ml-16">
        <form class="w-full center max-w-lg mr-8"
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
              v-model="newPeople"
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
              "
              for="grid-first-name"
            >
              Email:
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
              placeholder="Informe o email"
              aria-label="Full name"
             
              v-model="newEmailPeople"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="flex mt-6 mb-6">
      <label class="flex items-center">
        <input
          type="checkbox"
          class="form-checkbox"
          v-model="user.name"
          required
        />
        <span class="ml-2 text-sm">Administrador</span>
      </label>
    </div>
    <div class="flex-row-reverse ml-16">
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
            "
            for="grid-first-name"
          >
            Senha:
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
            type="password"
            placeholder="Informe a senha"
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
            "
            for="grid-first-name"
          >
            Confirme a senha:
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
            type="password"
            placeholder="Confirme a senha"
            aria-label="Full name"
          />
        </div>
        <div class="mb-4">
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
              @click="addNewPeople"
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
            @click="reset"
          >
            Cancelar
          </button>
          <button
            type="submit"
            v-if="mode === 'remove'"
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
              bg-red-400
              hover:bg-red-800
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
            @click="remove"
          >
            Remover
          </button>
        </div>
      </form>
    </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200" :fields="fields">
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
            <tbody v-for="people in users" v-bind:key="people" class="bg-white divide-y divide-gray-200">
              <tr>
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
                  <div class="text-sm text-gray-900">{{people.code}}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="
                      px-2
                      inline-flex
                      text-xs
                      leading-5
                      font-semibold
                      rounded-full
                      bg-green-100
                      text-green-800
                    "
                  >
                    {{people.path}}
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
  components: {},
  data: function () {
    return {
      mode: "save",
      newPeople: "",
      newEmailPeople: "",
      user: {},
      users: [
        { name: 'Lucas Olliveira', code: '008', path: 'Vue/Javascript/UI-UX', email: 'lucas@email.com' },
        { name: 'Lual Olliveira', code: '002', path: 'React/Javascript/UI-UX', email: 'lucas2@gmail.com' },
        { name: 'Luc Olliveira', code: '009', path: 'Angular/Javas  cript/UI-UX', email: 'luc@gmail.com' }
      ],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        {
          key: "admin",
          label: "Administrador",
          sortable: true,
          formatter: (value) => (value ? "Sim" : "Não"),
        },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  props: ['names'],
  methods: {
    loadUsers() {
      this.users;
    },
    reset() {
      this.mode = 'save'
      this.user = {}
      this.loadUsers();
    },
    save() {
    },  
    remove() {
      // const id = this.user.id
    },
    addNewPeople() {
      if(this.newPeople) {
        this.users.push({
          name: this.newPeople,
          email: this.newEmailPeople,
          code: '007',
          path:'Javascript/BackEnd/Node',
        })
      }
      this.$toasted.global.defaultSuccess()
    }
  },
  mounted() {
    this.loadUsers();
    console.log(this.newEmailPeople)
  },
  };

</script>

<style>
</style>
