export default {};

export const Cover = ({ inset, gap }) =>
    `
        <div class="cover ${inset}">
            <div class="cluster justify:sb">
                <h1>Hello World</h1>
                <div class="cluster">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    <a href="#">Link 4</a>
                    <a href="#">Link 5</a>
                </div>
            </div>
            <div class="main">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam illo aut quasi quas
            </div>
            <small class="center">&copy; 2022 Hello World Incorporated</small>
        </div>
    `;

Cover.argTypes = {
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
