import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types';

// Funcion que se mandara a llamnar en el componente 
export function showAlert(alert) {
    return (dispatch) => {
        dispatch(createAlert(alert));
    }
}

// Sub funcion que sera llamada por la funcion principal
const createAlert = alert => ({
    type: MOSTRAR_ALERTA,
    payload: alert
});

// Funcion que se mandara a llamnar en el componente 
export function hideAlert() {
    return (dispatch) => {
        dispatch(hideAlertError());
    }
}

// Sub funcion que sera llamada por la funcion principal
const hideAlertError = () => ({
    type: OCULTAR_ALERTA
})