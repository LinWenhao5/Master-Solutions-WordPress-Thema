wp.blocks.registerBlockType("blocktheme/section-reviews", {
    title: "Section Reviews",
    edit: function () {
        return wp.element.createElement("div", {className: "our-placeholder-block"}, "Reviews Area")
    },
    save: function () {
        return null
    }
})