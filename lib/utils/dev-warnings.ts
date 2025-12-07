/**
 * Development-only warning and error utilities for prop validation.
 * These functions only run in development mode and are stripped in production.
 */

/**
 * Displays a warning message in development mode.
 *
 * @param condition - Condition that triggers the warning
 * @param message - Warning message to display
 *
 * @example
 * ```tsx
 * warnIf(
 *   hoverColor && !isValidHexColor(hoverColor),
 *   'Button: hoverColor deve ser uma cor hexadecimal válida'
 * );
 * ```
 */
export function warnIf(condition: boolean, message: string): void {
    if (process.env.NODE_ENV === 'development' && condition) {
        console.warn(`[Barro UI] ${message}`);
    }
}

/**
 * Displays an error message in development mode.
 *
 * @param condition - Condition that triggers the error
 * @param message - Error message to display
 *
 * @example
 * ```tsx
 * errorIf(
 *   !children && !ariaLabel,
 *   'Button: deve fornecer children ou aria-label para acessibilidade'
 * );
 * ```
 */
export function errorIf(condition: boolean, message: string): void {
    if (process.env.NODE_ENV === 'development' && condition) {
        console.error(`[Barro UI] ${message}`);
    }
}

/**
 * Validates that a required prop is provided.
 *
 * @param value - Prop value to validate
 * @param propName - Name of the prop
 * @param componentName - Name of the component
 *
 * @example
 * ```tsx
 * validateRequired(href, 'href', 'TextUnderline');
 * ```
 */
export function validateRequired(
    value: unknown,
    propName: string,
    componentName: string,
): void {
    warnIf(
        value === undefined || value === null,
        `${componentName}: prop '${propName}' is required but was not provided.`,
    );
}

/**
 * Validates that only one of the specified props is provided.
 *
 * @param props - Object containing the props to validate
 * @param propNames - Array of prop names that are mutually exclusive
 * @param componentName - Name of the component
 *
 * @example
 * ```tsx
 * validateMutuallyExclusive(
 *   { src: icon.src, name: icon.name },
 *   ['src', 'name'],
 *   'Button'
 * );
 * ```
 */
export function validateMutuallyExclusive(
    props: Record<string, unknown>,
    propNames: string[],
    componentName: string,
): void {
    const providedProps = propNames.filter((name) => props[name] !== undefined && props[name] !== null);

    warnIf(
        providedProps.length > 1,
        `${componentName}: only one of [${propNames.join(', ')}] should be provided. Found: ${providedProps.join(', ')}`,
    );
}
