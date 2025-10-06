import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import {
  faCircleRight,
  faHeart as farFaHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";

library.add(fasFaHeart, farFaHeart, faCircleRight);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
