export default {};

export const Stack = ({ gap, inset, space }) =>
    `
        <div class='stack ${inset} ${gap}'>
            <p>Test spacing</p>
            <p class="${space}">lorem ipsum dolor</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolore minima, id aliquamquam sed incidunt aperiam, fuga iure, temporibus magnam. Explicabo, quae ut. Magni velitvitae voluptates repellat deserunt?</p>
        </div>
    `;

Stack.argTypes = {
    gap: {
        control: 'select',
        defaultValue: 'gap:m',
        options: ['gap:2xs', 'gap:xs', 'gap:s', 'gap:m', 'gap:l', 'gap:xl', 'gap:2xl']
    },
    inset: {
        control: 'select',
        defaultValue: '0',
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
    space: {
        control: 'select',
        defaultValue: 'undefined',
        options: [
            'undefined',
            'space:2xs',
            'space:xs',
            'space:s',
            'space:m',
            'space:l',
            'space:xl',
            'space:2xl'
        ]
    }
};
