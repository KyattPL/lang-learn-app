export const dashOnEmptyInput = (ref) => {
    let result = null;

    if (ref.current.type === 'checkbox') {
        result = ref.current.checked;
    } else if (ref.current.type === 'select-one') {
        result = ref.current.value;
    } else {
        result = ref.current.value === '' ? '-' : ref.current.value;
    }

    return result;
};