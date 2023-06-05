wp.blocks.registerBlockType("blocktheme/header", {
    title: "MasterSolutions Header",
    edit: function () {
        return wp.element.createElement("div", {className: "our-placeholder-block"}, "Header Area")
    },
    save: function () {
        return null
    }
})