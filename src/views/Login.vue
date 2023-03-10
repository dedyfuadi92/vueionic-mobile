<template>
    <div class="h-screen w-full flex flex-col justify bg-slate-800">
        <h4>Login Page</h4>
        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-list>
                        <ion-item>
                            <ion-label position="floating">Email</ion-label>
                            <ion-input placeholder="account@email.com" type="email" pattern="email"></ion-input>
                        </ion-item>
                    </ion-list>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-list>
                        <ion-item>
                            <ion-label position="floating">Password</ion-label>
                            <ion-input placeholder="********" type="password" pattern="password"></ion-input>
                        </ion-item>
                    </ion-list>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>
<script lang="ts">
import { IonCol, IonGrid, IonRow, IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: { IonCol, IonGrid, IonRow, IonInput, IonItem, IonLabel, IonList },
});
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
