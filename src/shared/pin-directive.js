export default {
  bind: (element, binding) => {
    if (binding.arg !== "position") return;

    Object.keys(binding.value).forEach((position) => {
      element.style[position] = binding.calue[position];
    });
    element.style.position = "absolute";
  },
};
