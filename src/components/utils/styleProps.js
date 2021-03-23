export default (style, bgImage) => (bgImage ? { ...style, ...bgImage } : style)
