export default {};

export const Grid = ({ gap, inset }) =>
    `
        <div class="grid ${gap} ${inset}">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cum autem dolore
                explicabo quo ducimus magnam earum, dolor rem beatae repudiandae ipsum qui? Sequi
                repellendus at minima impedit ut magni!
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cum autem dolore
                explicabo quo ducimus magnam earum, dolor rem beatae repudiandae ipsum qui? Sequi
                repellendus at minima impedit ut magni!
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cum autem dolore
                explicabo quo ducimus magnam earum, dolor rem beatae repudiandae ipsum qui? Sequi
                repellendus at minima impedit ut magni!
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cum autem dolore
                explicabo quo ducimus magnam earum, dolor rem beatae repudiandae ipsum qui? Sequi
                repellendus at minima impedit ut magni!
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cum autem dolore
                explicabo quo ducimus magnam earum, dolor rem beatae repudiandae ipsum qui? Sequi
                repellendus at minima impedit ut magni!
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cum autem dolore
                explicabo quo ducimus magnam earum, dolor rem beatae repudiandae ipsum qui? Sequi
                repellendus at minima impedit ut magni!
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cum autem dolore
                explicabo quo ducimus magnam earum, dolor rem beatae repudiandae ipsum qui? Sequi
                repellendus at minima impedit ut magni!
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cum autem dolore
                explicabo quo ducimus magnam earum, dolor rem beatae repudiandae ipsum qui? Sequi
                repellendus at minima impedit ut magni!
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cum autem dolore
                explicabo quo ducimus magnam earum, dolor rem beatae repudiandae ipsum qui? Sequi
                repellendus at minima impedit ut magni!
            </div>
        </div>
    `;

Grid.argTypes = {
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
    }
};
