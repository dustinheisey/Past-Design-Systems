export default {};

export const Switcher = ({ gap, inset, threshold }) =>
    `
        <div class="switcher ${gap} ${inset} ${threshold}">
            <p>lorem ipsum dolor sit amet, consectetur adipis</p>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
    `;

Switcher.argTypes = {
    gap: {
        control: 'select',
        options: ['gap:2xs', 'gap:xs', 'gap:s', 'gap:m', 'gap:l', 'gap:xl', 'gap:2xl']
    },
    inset: {
        control: 'select',
        options: [
            '0',
            'inset:2xs',
            'inset:xs',
            'inset:s',
            'inset:m',
            'inset:l',
            'inset:xl',
            'inset:2xl'
        ]
    },
    threshold: {
        control: 'select',
        options: [
            'threshold:phone',
            'threshold:tablet-portrait',
            'threshold:tablet-landscape',
            'threshold:desktop',
            'threshold:l-desktop'
        ]
    }
};
