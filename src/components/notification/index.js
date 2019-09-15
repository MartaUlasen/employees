import iziToast from 'izitoast';

export const notification = {
    success(message) {
        iziToast.success({
            title: 'OK',
            message: message,
        });
    },
    error(message) {
        iziToast.error({
            title: 'Error',
            message: message,
        });
    },
}