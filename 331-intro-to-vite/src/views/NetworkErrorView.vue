<template>
    <div class="text-center p-8">
        <h1>Uh-Oh!</h1>
        <h3>
            It look like you're experiencing some network issues, please take a breath and
            <a href="#" @click="$router.go(-1)" class="text-blue-500 underline hover:text-blue-700">click here</a> to try again.
        </h3>
    </div>
</template>