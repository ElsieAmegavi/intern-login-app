import Swal from 'sweetalert2';

const showAlert = (title, text) => {
        Swal.fire({
            icon: "error",
            title: "invalid",
            text ,
        });       
}

const showToast = (icon, title) => {

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
    });

    Toast.fire({
        icon: icon,
        title: title
    });

}



export {
    showAlert,showToast
};