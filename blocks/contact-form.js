wp.blocks.registerBlockType("blocktheme/contact-form", {
    title: "Contact Form",
    edit: function () {
        return wp.element.createElement("div", {className: "our-placeholder-block"}, "Form Area")
    },
    save: function () {
        return null
    }
})