export default {};

export const Cluster = ({ gap, inset, justify }) =>
    `
        <div class="cluster ${gap} ${inset} ${justify}">
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
        </div>
    `;

Cluster.argTypes = {
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
    justify: {
        control: 'select',
        options: ['justify:s', 'justify:c', 'justify:e', 'justify:sb', 'justify:sa', 'justify:se']
    }
};
