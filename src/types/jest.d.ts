// Jest types declaration
import '@testing-library/jest-dom';

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeInTheDocument(): R;
            toHaveClass(className: string): R;
            toHaveTextContent(text: string): R;
            toBeVisible(): R;
            toBeDisabled(): R;
            toBeChecked(): R;
            toHaveValue(value: string | number): R;
            toHaveAttribute(attr: string, value?: string): R;
        }
    }
}
