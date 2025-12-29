import Modal from "./Modal";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";

export default function ModalAuth({ type, onClose }) {
    return (
        <Modal onClose={onClose}>
            {type === "login" ? (
                <LoginForm onSuccess={onClose} />
            ) : (
                <RegisterForm onSuccess={onClose} />
            )}
        </Modal>
    );
}
