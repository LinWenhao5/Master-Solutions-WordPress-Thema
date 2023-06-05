wp.blocks.registerBlockType("blocktheme/section-search", {
    title: "Section Search",
    edit: function () {
        return wp.element.createElement("div", {className: "our-placeholder-block"}, "Search")
    },
    save: function () {
        return null
    }
})