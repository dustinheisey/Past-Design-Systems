export default {};

export const Frame = ({ aspect }) =>
    `
        <div class="grid gap:m inset:m">
            <div class="frame ${aspect}">
                <img src="https://images.unsplash.com/photo-1653936999234-6574484abc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80" alt="putin" />
            </div>
            <div class="frame ${aspect}">
                <img src="https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="climate change" />
            </div>
            <div class="frame ${aspect}">
                <img src="https://images.unsplash.com/photo-1588968985948-9d1337592485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="cow" />
            </div>
        </div>
    `;

Frame.argTypes = {
    aspect: {
        control: 'select',
        options: ['aspect:square', 'aspect:photo', 'aspect:video']
    }
};
