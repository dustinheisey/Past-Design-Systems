export default {};

export const Reel = ({ gap, inset }) =>
    `
        <div class='reel overflowing ${inset} ${gap}'>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
        </div>
    `;

Reel.argTypes = {
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
    }
};
