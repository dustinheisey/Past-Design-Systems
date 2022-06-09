export default {};

export const Center = ({ inset }) => `
    <div class="center ${inset}">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolore minima, id aliquamquam sed incidunt aperiam, fuga iure, temporibus magnam. Explicabo, quae ut. Magni velitvitae voluptates repellat deserunt?</p>
    </div>
`;

Center.argTypes = {
    inset: {
        control: 'select',
        defaultValue: 'inset:xs',
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
