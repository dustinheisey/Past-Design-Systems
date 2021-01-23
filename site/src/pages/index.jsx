import { React, Masonry } from 'styles'
import { Layout } from '../regions/layout'

export default () => (
    <Layout
        title="Home - Climate Strike Oregon"
        index
        description="Climate Strike Oregon is the hub for information about the strike, events, and actions that are happening, and ways to get involved"
    >
        <Masonry col="3" gap="5px" as="section">
            <p>hello</p>
            <p>Goodbye</p>
            <p>Hello</p>
        </Masonry>
    </Layout>
)
