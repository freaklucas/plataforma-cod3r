<template>
  <div class="login">
    <div class="container">
      <div class="flex h-screen">
        <div class="m-auto">
          <div class="p-8 shadow-lg rounded-xl text-center bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline text-cyan-600 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <h1 class="text-3xl font-bold text-cyan-500">Login</h1>
            <h1 class="text-2xl font-semibold text-gray-500">
              Faça login para aprender programação na prática
            </h1>
            <div class="text-left pt-3">
              <input
                type="email"
                placeholder="E-mail"
                class="
                  p-1
                  rounded-lg
                  bg-gray-100
                  shadow-md
                  focus:outline-none
                  focus:border-2
                  border-cyan-500
                "
              />
            </div>
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
</style>