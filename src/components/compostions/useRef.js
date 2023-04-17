import { ref } from "vue";

const awesomeness = ref("On");

export function useRef() {
    function toggle() {
        if (awesomeness.value === "On") {
            awesomeness.value = "Off";
            return;
        }
        awesomeness.value = "On";
    }

    return {
        awesomeness,
        toggle
    }
}