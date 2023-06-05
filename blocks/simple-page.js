wp.blocks.registerBlockType("blocktheme/simple-page", {
    title: "Simple Page/Blog",
    edit: function () {
        return wp.element.createElement("div", {className: "our-placeholder-block"}, "Page/Blog")
    },
    save: function () {
        return null
    }
})