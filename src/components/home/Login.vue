<template>
  <div class="login">
    <div class="container">
      <div class="flex h-screen">
        <div class="m-auto">
          <div class="p-8 shadow-lg rounded-xl text-center bg-white">
            <img
              src="../../assets/images/cod3r.png"
              class="inline text-cyan-600 h-24 w-24"
              alt="logo da cod3r plataforma"
            />
            <h1 class="text-4xl font-bold text-gray-700 mt-4 mb-4">Login</h1>
            <h1 class="text-1xl font-semibold text-gray-500">
              Faça login para aprender programação na prática
              <img src="../../assets/icons/ideia.svg" alt="icone de ideia" class="inline w-4 h-8 mb-1">
            </h1>
            <div class="text-left pt-3 justify-center">
              <input
                type="email"
                placeholder="E-mail"
                class="
                  p-1
                  ml-20
                  h-full
                  w-1/2
                  rounded-lg
                  bg-gray-100
                  shadow-md
                  focus:outline-none
                  focus:border-2
                  border-cyan-500
                  hover:bg-blue-100
                "
              />
              <input
                type="password"
                placeholder="Senha"
                class="
                  block
                  p-1
                  ml-20
                  w-1/2
                  mt-3
                  mb-2
                  rounded-lg
                  bg-gray-100
                  shadow-md
                  focus:outline-none
                  focus:border-2
                  border-cyan-500
                  hover:bg-blue-100
                "
              />
              <a class="text-sm text-red-600 underline-none"
                >Esqueceu sua senha?</a
              >
            </div>
            <button
              type="submit"
              class="
                bg-cyan-200
                p-2
                pl-2
                pr-5
                text-gray-700 text-center
                font-bold
                rounded-xl
                border-cyan-700
                focus:ring-2
                m-4
                bg-gray-300
                hover:bg-blue-100
              "
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background-color: #c9f5f9;
}
</style>