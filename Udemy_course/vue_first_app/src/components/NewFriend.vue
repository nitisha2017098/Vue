<template>
<form @submit.prevent="SubmitData">
    <div>
        <label>Name:</label>
        <input type="text" v-model="enteredName"/>
    </div>
    <div>
        <label>Phone: </label>
        <input type="tel" v-model="enteredPhone"/>
    </div>
    <div>
        <label>Email: </label>
        <input type="Email" v-model="enteredEmail"/>
    </div>
    <div>
        <button>Add Contact</button>
    </div>
</form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: '',
        };
    },
    methods: {
        SubmitData(){
            this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
        },
        addContact(name, phone, email){
            const NewFriendConatct = { 
                id: new Date().toISOString(),
                name : name,
                phone: phone,
                email: email,
                isFavourite: false,
            };
            this.friends.push(NewFriendConatct);
        }
    }
}
</script>
