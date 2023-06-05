wp.blocks.registerBlockType("blocktheme/section-map", {
    title: "Section Map",
    edit: function () {
        return wp.element.createElement("div", {className: "our-placeholder-block"}, "Address Area")
    },
    save: function () {
        return null
    }
})