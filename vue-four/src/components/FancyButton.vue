<template>
    <button class="fancy-button">
        <slot></slot>
    </button>
</template>

<style>
.fancy-button{
    color: whitesmoke;
    background-color: #f01d71;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 1.2em;
}
</style>