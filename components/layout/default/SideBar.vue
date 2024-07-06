
<template>
  <aside style="min-height: 100vh;border-right-width: 1px;" class="flex flex-col items-center bg-white-600">
    <section id="header" class="flex w-full flex-col items-center cursor-pointer" style="border-bottom-width: 1px;">
      <div class="flex w-full min-h-[88px] items-start pt-6 pl-4" >
        <div class="flex flex-row items-center gap-4">
          <img :src="'EcosMiniLogo(updated).svg'" class="p-0" />
          <div class="flex flex-col">
           
          </div>
        </div>
      </div>
    </section>
    <section id="body" class="h-full w-full">
      <div class="flex flex-col p-4">
        <p>First layer Widget with Links</p>
      </div>  
    </section>
    <section id="footer" class="flex w-full h-full items-end">
      <div class="flex w-full min-h-[72px] items-start p-4 items-center justify-between" style="border-top-width: 1px;" >
        <u-avatar  
          src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
          alt="Avatar"
          size="md"
          chip-color="green"
        >
        </u-avatar>
        <button class="hover:bg-gray-100 rounded-xl p-1">
          <icon name="radix-icons:dots-vertical"  size="20px"/>
        </button>
      </div>
    </section>
  </aside>
</template>