export default {
  title: 'Elements/Video',
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'centered'
  }
}

export const Default = () => `
  <video controls>
    <source src="https://example.com/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
`
