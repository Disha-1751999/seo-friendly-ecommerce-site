import { ModalLayoutProps } from "@/types";

export default function ModalLayout({ children, modal }: ModalLayoutProps) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}