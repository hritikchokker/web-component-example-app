import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.component("PopupLib", <popup-comp></popup-comp>);
app.mount("#app");
