wp.blocks.registerBlockType("blocktheme/blog", {
    title: "Blog",
    edit: function () {
        return wp.element.createElement("div", {className: "our-placeholder-block"}, "Blog Area")
    },
    save: function () {
        return null
    }
})