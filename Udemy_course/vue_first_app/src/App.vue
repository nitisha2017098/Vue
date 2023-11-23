<template>
<section>
    <h2>My Friends</h2>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
        <Friend-Contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name" 
        :phone-number="friend.phone" 
        :email-address="friend.email"
        :isFavourite="friend.isFavourite"
        @toggle-favourite="toggleFavouriteStatus"
        ></Friend-Contact>
    </ul>
</section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';
export default {
    components: {
        FriendContact,
        NewFriend
    },
    data() {
        return {
            friends: [{
                    id: "sks",
                    name: "abc",
                    phone: "0123 45678 90",
                    email: "abc@localhost.com",
                    isFavourite: true,
                },
                {
                    id: "jks",
                    name: "cde",
                    phone: "0987 654421 21",
                    email: "cde@localhost.com",
                    isFavourite: false,
                },
            ],
        };
    },
    methods: {
        toggleFavouriteStatus(friendId){
            const identifiedFriend = this.friends.find((friend) => friend.id === friendId);
            identifiedFriend.isFavourite = !identifiedFriend.isFavourite
        }
    }
};
</script>
