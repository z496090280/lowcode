/*
 * @Author: lee
 * @Date: 2023-03-27 17:09:28
 * @LastEditTime: 2023-03-31 16:23:17
 */
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { editorEvents } from "@/data/event";
import { p, useProjectStore } from "./project";

const projectStore = useProjectStore();

export const useEventsStore = defineStore("events", () => {
  const currentType = ref<string>(editorEvents[0].type);
  const currentEvents = computed(
    () => editorEvents.find((item) => item.type === currentType.value).events
  );

  const currentEventType = ref<string>(currentEvents.value[0].name);
  const currentEventArgs = computed(
    () =>
      currentEvents.value.find((item) => item.name === currentEventType.value)
        .args
  );
  const currentEventArgsValues = ref<any[]>([]);

  function changeType(type: string) {
    currentType.value = type;
  }

  function saveEvent(page: number, elementId: string) {
    const props = p.getPageByIndex(page).getElementById(elementId).props;
    if (!props.events) {
      props.events = {};
    }
    props.events[`${currentType.value}:${currentEventType.value}`] = [
      ...currentEventArgsValues.value,
    ];
  }
  function changeArgsValues(ev: any, index: number) {
    currentEventArgsValues.value[index] = ev;
  }

  return {
    currentType,
    currentEvents,
    currentEventType,
    currentEventArgs,
    currentEventArgsValues,

    changeType,
    saveEvent,
    changeArgsValues,
  };
});
