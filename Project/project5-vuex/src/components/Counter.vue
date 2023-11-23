<template>
    <div>
        <div>This is counter</div>
        <div>{{  $store.state.count }}</div>
    </div>
    <div>
        <button @click.prevent="onIncrement()">Increment</button>
    </div>
</template>

<script>
export default{
    name: 'Counter-vue',
    data(){
        return{
        };
    },
    computed: {
        count(){
            return this.$store.state.count;
        }
    },
    methods: {
        onIncrement(){
            this.$store.commit('Increment', { value : 5})
        },
    },
};
</script>