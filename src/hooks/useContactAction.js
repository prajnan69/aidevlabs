/**
 * Returns a click handler for contact CTAs.
 * - On mobile (width < 768px): navigates instantly to tel: or mailto:
 * - On desktop: opens the contact modal by calling openModal()
 */
export function useContactAction(openModal, mobileUrl) {
    return (e) => {
        e.preventDefault();
        if (window.innerWidth < 768) {
            window.location.href = mobileUrl;
        } else {
            openModal();
        }
    };
}
