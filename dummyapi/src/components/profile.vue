<template> 
    <div class="container p-5 my-5 bg-dark text-white">
        <div class="row sm-4">
            <div class="col-sm-4">
                <h3>Column 1</h3>  
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
            <div class="col-sm-4">
                <h3>Column 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
            <div class="col-sm-4">
                <h3>Column 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'my-profile',
    components: {
         
    }
}
</script>
<style>

</style>



<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-6">
            <b-card class="profile">
                <img :src="require('@/assets/images/avatars/User-Profile-PNG-Image.png')" alt="profile-img">
                <h2>{{ printale_name }}</h2>
                <b-badge variant="light-success">{{ userData.email }}</b-badge>
                <div class="col-md-12 mt-2 qrcode" v-if="showPasswordForm || QRExpired">
                    <!-- <span class="badge badge-light-secondary mb-1">{{$t('Scan QR to Login')}}</span> -->
                    <!-- <div v-html="qrcodeurl" style="border: 1px solid #fff;"></div>
                  <b-button
                    v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                    variant="success"
                    v-if="QRExpired"
                    @click="refreshQRCode()"
                    >
                    <feather-icon
                      icon="RefreshCwIcon"
                      class="mr-50"
                    />
                    Refresh
                  </b-button> -->

                    <div class="authenticate">
                        <img :src="require('@/assets/images/qrcode.svg')" alt="Image for Authentication button">
                        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="success" @click="showPasswordForm = false">
                            <feather-icon icon="lock" class="font-awesome fa-lock" />
                            Authenticate
                        </b-button>
                    </div>
                </div>
                <validation-observer ref="QRUpdate">
                    <div class="col-md-12 mt-2" v-if="!showPasswordForm">
                        <div class="authenticate">
                            <div class="password">
                                <b-form-group :label="$t('Password')" label-for="password">
                                    <validation-provider #default="{ errors }" :name="$t('Password')" rules="required">
                                        <b-form-input v-model="authenticate" type="password" id="password" :placeholder="('Enter your password')" />
                                        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="success" @click="submitForm">
                                            Submit
                                        </b-button>
                                        <small class="text-danger">{{ errors[0] }}</small>
                                    </validation-provider>
                                </b-form-group>
                            </div>
                        </div>
                    </div>
                </validation-observer>

                <div v-if="!QRExpired" class="col-md-12 mt-2 qrcode">
                    <span class="badge badge-light-secondary mb-1">{{$t('Scan QR to Login')}}</span>
                    <!-- <div v-html="qrcodeurl" style="border: 1px solid #fff;"></div> -->
                    <img :src="qrcodeurl" />
                </div>
            </b-card>
            <b-card class="profile qr-code">
                <!-- Code for QR Code Start -->
                <QR-Code />
                <!-- Code for QR Code End-->
            </b-card>
        </div>
        <div class="col-md-6">
            <b-card class="profile text-left">
                <h3 class="mb-3">{{ $t('Profile Update') }}</h3>
                <form action="">
                    <validation-observer ref="updateProfile">
                        <div class="row">
                            <div class="col-md-6">
                                <b-form-group :label="$t('name')" label-for="name">
                                    <b-form-input v-model="userName" name="name" id="name" :placeholder="$t('name')" @keyup="removeNameError" />
                                    <small v-if="!nameValid" class="text-danger">{{ $t('Use alphabet,numbers and space only!')}}</small>
                                    <b-card-text v-for="(field,key) in errors_set.name " :key="key" class="mb-0">
                                        <small class="text-danger">{{ field }}</small>
                                    </b-card-text>
                                </b-form-group>
                            </div>
                            <div class="col-md-6">
                                <b-form-group :label="$t('email')" label-for="email">
                                    <validation-provider #default="{ errors }" :name="$t('email')" rules="email">
                                        <b-form-input v-model="email" name="email" id="email" :placeholder="$t('email')" @keyup="removeEmailError" />
                                        <small class="text-danger d-block">{{ errors[0] }}</small>
                                    </validation-provider>
                                    <b-card-text v-for="(field,key) in errors_set.email " :key="key" class="mb-0">
                                        <small class="text-danger">{{ field }}</small>
                                    </b-card-text>
                                </b-form-group>
                            </div>
                            <div class="col-md-12">
                                <b-form-group :label="$t('Items Per Page')">
                                    <v-select v-model="userData.items_per_page" :clearable="false" id="items_per_page" :options="perPageRows"></v-select>
                                    <b class="text-warning">{{$t('note')}}: <small>{{ $t('reset_all_table_per_page')}}</small></b>
                                </b-form-group>
                            </div>
                            <div class="col-md-6">
                                <b-button variant="primary" dusk="updateProfile" :disabled="disabled_profile_update_and_spin" @click="updateProfile">
                                    {{ $t("Update") }}
                                    <b-spinner v-if="disabled_profile_update_and_spin" small variant="light" class="ml-1" label="Small Spinning">
                                    </b-spinner>
                                </b-button>
                            </div>
                        </div>
                    </validation-observer>
                </form>
            </b-card>
            <div>
                <TFactorAuth />
            </div>
            <b-card class="profile text-left">
                <h3 class="mb-3">{{ $t("Password Update")}}</h3>
                <validation-observer ref="updatePassword">
                    <div class="row">
                        <div class="col-md-12">
                            <b-form-group :label="$t('Old Password')" label-for="oldPassword">
                                <validation-provider #default="{ errors }" name="password" rules="required">
                                    <b-input-group class="input-group-merge">
                                        <b-form-input v-model="passData.current_password" name="oldPassword" id="oldPassword" :type="passwordFieldType" :placeholder="$t('Old Password')" @keyup="removeError" />
                                        <b-input-group-append is-text>
                                            <feather-icon class="cursor-pointer" :icon="oldPasswordToggleIcon" />
                                        </b-input-group-append>
                                    </b-input-group>
                                    <small class="text-danger d-block">{{ errors[0] }}</small>
                                </validation-provider>
                                <b-card-text v-for="(field,key) in errors_set.current_password " :key="key" class="mb-0">
                                    <small class="text-danger">{{ field }}</small>
                                </b-card-text>
                            </b-form-group>
                        </div>
                        <div class="col-md-6">
                            <b-form-group :label="$t('New Password')" label-for="newPassword">
                                <validation-provider #default="{ errors }" name="Password" rules="required|min:8|password">
                                    <b-form-input v-model="passData.password" name="newPassword" type="password" id="newPassword" @keyup="removeNError" :placeholder="$t('New Password')" />
                                    <small class="text-danger d-block">{{ errors[0] }}</small>
                                </validation-provider>
                            </b-form-group>

                            <b-card-text v-for="(field,key) in errors_set.password" :key="key" class="mb-0">
                                <small class="text-danger">{{ field }}</small>
                            </b-card-text>
                        </div>
                        <div class="col-md-6">
                            <b-form-group :label="$t('Confirm Password')" label-for="cPassword">
                                <validation-provider #default="{ errors }" :name="$t('Confirm Password')" rules="required|confirmed:Password">
                                    <b-input-group class="input-group-merge">
                                        <b-form-input v-model="passData.password_confirmation" id="cPassword" :type="confirmPasswordFieldType" name="cPassword" :placeholder=" $t('Confirm Password')" />
                                        <b-input-group-append is-text>
                                            <feather-icon class="cursor-pointer" :icon="confirmPasswordToggleIcon" @click="confirmTogglePasswordVisibility" />
                                        </b-input-group-append>
                                    </b-input-group>
                                    <small class="text-danger d-block">{{ errors[0] }}</small>
                                </validation-provider>
                            </b-form-group>
                        </div>
                        <div class="col-md-6">
                            <b-button variant="primary" dusk="updatePassword" :disabled="disabled_password_update_and_spin" @click="updatePassword">
                                {{ $t('Update')}}
                                <b-spinner v-if="disabled_password_update_and_spin" small variant="light" class="ml-1" label="Small Spinning">
                                </b-spinner>
                            </b-button>
                        </div>
                    </div>
                </validation-observer>
            </b-card>
        </div>
    </div>
</div>
</template>

<script>
import {
    email
} from '@validations'
import {
    BButton,
    BInputGroupAppend,
    BFormCheckbox,
    BCard,
    BCardText,
    BLink,
    BFormInput,
    BFormGroup,
    BRow,
    BForm,
    BCol,
    BInputGroup,
    BFormTextarea,
    BInputGroupPrepend,
    BBadge,
    BFormRadioGroup,
    BSpinner,
    BDropdownItem,
    BDropdown,
    BImg
} from "bootstrap-vue";
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue';
import {
    togglePasswordVisibility,
    confirmTogglePasswordVisibility
} from "@core/mixins/ui/forms";
import QRCode from '../component/qrcode.vue'
import TFactorAuth from '../component/2fa.vue'
import vSelect from "vue-select";
export default {
    components: {
        vSelect,
        QRCode,
        TFactorAuth,
        BImg,
        BButton,
        BInputGroupAppend,
        BFormCheckbox,
        BCard,
        BCardText,
        BLink,
        BFormInput,
        BFormGroup,
        BRow,
        BForm,
        BCol,
        BInputGroup,
        BFormTextarea,
        BInputGroupPrepend,
        BBadge,
        BFormRadioGroup,
        BSpinner,
        BDropdownItem,
        BDropdown
    },
    mixins: [togglePasswordVisibility, confirmTogglePasswordVisibility],
    data() {
        return {
            disabled_profile_update_and_spin: false,
            disabled_password_update_and_spin: false,
            email,
            submitted: false,
            userName: null,
            email: null,
            QRExpired: false,
            qrcodeurl: '',
            userData: {
                id: null,
                items_per_page: null
            },
            passData: {
                current_password: '',
                password: '',
                password_confirmation: '',
            },
            perPageRows: ['5', '15', '25', '50', '100'],
            errors_set: '',
            authenticate: '',
            showPasswordForm: true, // for authentication
            isAuthenticated: false,
            buttonSubmit: false
        };
    },

    computed: {
        oldPasswordToggleIcon() {
            return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
        },
        confirmPasswordToggleIcon() {
            return this.confirmPasswordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
        },
        nameValid() {
            return /^[a-zA-Z][a-zA-Z0-9\s]*$/.test(this.userName);
        },
        printale_name() {
            return this.$store.getters.authData.user.name;
        }
    },
    created() {
        this.userName = this.$store.getters.authData.user.name;
        this.userData = this.$store.getters.authData.user;
        this.email = this.userData.email;

    },
    methods: {
        // authenticate() {
        //     this.showPasswordForm = true;

        //     const passwordData = {
        //         password: this.password,
        //     };
        //     console.log('this.password');
        // },
        async submitPassword() {
            // console.log('Form submitted!', this.password); 
            this.$store.dispatch('getQRCode').then(response => {
                if (response.status == 200) {
                    //console.log(response);
                    this.qrcodeurl = response.data;
                    setTimeout(() => {
                        this.QRExpired = true;
                    }, 60000)
                    //console.log(this.qrcodeurl);
                }
            });
        },
        async submitForm() {
            this.$refs.QRUpdate.validate().then((success) => {
                if (success) {
                    this.$store.dispatch('postQRCode', {
                        'password': this.authenticate
                    }).then(response => {
                        if (response.status == 200) {
                            this.qrcodeurl = URL.createObjectURL(response.data);
                            setTimeout(() => {
                                this.QRExpired = true;
                            }, 60000)
                        }
                    })
                }
            })

        },
        refreshQRCode() {
            this.$store.dispatch('getQRCode', ).then(response => {
                if (response.status == 200) {
                    //console.log(response);
                    this.QRExpired = false;
                    this.qrcodeurl = response.data;
                    setTimeout(() => {
                        this.QRExpired = true;
                    }, 60000)
                    //console.log(this.qrcodeurl);
                }
            });
        },

        removeNameError() {
            if (this.errors_set)
                this.errors_set.name = '';
        },
        removeEmailError() {
            if (this.errors_set)
                this.errors_set.email = '';
        },
        removeNError() {
            if (this.errors_set)
                this.errors_set.password = '';
        },
        removeError() {
            if (this.errors_set)
                this.errors_set.current_password = '';
        },

        updateProfile() {
            this.$refs.updateProfile.validate().then(success => {
                if (success) {
                    this.disabled_profile_update_and_spin = true;
                    this.userData['name'] = this.userName;
                    this.userData['email'] = this.email;
                    this.$store.dispatch('profileUpdate', this.userData).then(response => {
                        this.disabled_profile_update_and_spin = false;
                        if (response.data) {
                            this.errors_set = response.data.errors;
                        };
                        if (response.status == 200 || response.status == undefined) {
                            this.$toast({
                                component: ToastificationContent,
                                props: {
                                    title: this.$t('PROFILE_UPDATED'),
                                    icon: 'BellIcon',
                                    variant: 'success',
                                },
                            });
                            this.$refs.updateProfile.reset();
                        } else {
                            this.$toast({
                                component: ToastificationContent,
                                props: {
                                    title: response.data.message,
                                    icon: 'BellIcon',
                                    variant: 'warning',
                                },
                            });
                        }
                    });
                }
            });
        },

        updatePassword() {
            this.$refs.updatePassword.validate().then(success => {
                if (success) {
                    this.disabled_password_update_and_spin = true;
                    this.$store.dispatch('passUpdate', this.passData).then(response => {
                        this.disabled_password_update_and_spin = false;
                        if (response.data) {
                            this.errors_set = response.data.errors;
                        };
                        if (response.status == 200 || response.status == undefined) {
                            this.$toast({
                                component: ToastificationContent,
                                props: {
                                    title: this.$t('PASSWORD_UPDATED'),
                                    icon: 'BellIcon',
                                    variant: 'success',
                                },
                            });
                            this.resetPass();
                        } else {
                            this.$toast({
                                component: ToastificationContent,
                                props: {
                                    title: response.data.message,
                                    icon: 'BellIcon',
                                    variant: 'warning',
                                },
                            });
                        }
                    });
                }
            });
        },
        resetPass() {
            this.$refs.updatePassword.reset();
            this.passData = {
                    current_password: '',
                    password: '',
                    password_confirmation: '',
                },
                this.submitted = false;
        },
    },
};
</script>

<style scoped>
.profile {
    text-align: center;
}

.qrImage {
    border: none !important;
}

.profile img {
    width: 200px;
    height: auto;
}

.authenticate {
    position: relative;
    width: 180px;
    margin: 0 auto;
}

.profile h2 {
    font-size: 32px;
    font-weight: 700;
    margin: 1rem 0 0.5rem 0;
}

.profile h3 {
    font-size: 21px;
    font-weight: 500;
    margin-bottom: 2rem;
}

.qrcode {
    position: relative;
    width: 180px;
    margin: 0 auto;
}

.qrcode button {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 45%;
}

.profile.qr-code .card-body {
    padding: 0px;
}
</style>

