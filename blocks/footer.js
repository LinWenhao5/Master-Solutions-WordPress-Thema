wp.blocks.registerBlockType("blocktheme/footer", {
    title: "MasterSolutions Footer",
    edit: function () {
        return wp.element.createElement("div", {className: "our-placeholder-block"}, "Footer Area")
    },
    save: function () {
        return null
    }
})