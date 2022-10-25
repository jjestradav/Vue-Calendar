import { createApp } from "vue";
import { SetupCalendar, Calendar, DatePicker } from "v-calendar";
import App from "./App.vue";

createApp(App)
  .use(SetupCalendar)
  .component("Calendar", Calendar)
  .component("DatePicker", DatePicker)
  .mount("#app");
