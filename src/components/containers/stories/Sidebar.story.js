export default {};

export const Sidebar = ({ gap, inset, space }) =>
    `
        <div class="sidebar ${gap} ${inset}">
            <div class="fixed">
                <img src="https://via.placeholder.com/300x200" alt="placeholder" />
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ipsum officiis deleniti
                consequatur ullam autem suscipit, impedit porro culpa asperiores nemo possimus dolorem.
                Deserunt ab blanditiis hic dolores, aliquid id. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Blanditiis ipsum officiis deleniti consequatur ullam autem suscipit,
                impedit porro culpa asperiores nemo possimus dolorem. Deserunt ab blanditiis hic dolores,
                aliquid id.
            </div>
        </div>
    `;

Sidebar.argTypes = {
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
