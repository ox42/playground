export default async () => {
  const [htmlCode] = await Promise.all([
    import('!raw-loader!./codepan.html')
  ])

  return {
    html: {
      code: htmlCode,
      transformer: 'html'
    },
    showPans: ['html', 'output']
  }
}
