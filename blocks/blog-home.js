wp.blocks.registerBlockType("blocktheme/blog-home", {
    title: "Blog Home",
    edit: function () {
        return wp.element.createElement("div", {className: "our-placeholder-block"}, "Blog Area")
    },
    save: function () {
        return null
    }
})