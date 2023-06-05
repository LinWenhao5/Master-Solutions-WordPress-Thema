import { RichText, BlockControls } from "@wordpress/block-editor"
import { ToolbarGroup, ToolbarButton} from "@wordpress/components"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("blocktheme/heading", {
    title: "Heading",
    attributes: {
        text: {type: "string"},
        className: {type: "string", default:"heading-2"}
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {
    function handelTextChange(x) {
        props.setAttributes({text: x});
    }

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.className === "heading-2"} onClick={()=>props.setAttributes({className: "heading-2"})}>Regular</ToolbarButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.className === "heading-26"} onClick={()=>props.setAttributes({className: "heading-26"})}>tangerine</ToolbarButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.className === "heading-23"} onClick={()=>props.setAttributes({className: "heading-23"})}>heading-23</ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <RichText
              tagName="h1" className={props.attributes.className}
              value={props.attributes.text} onChange={handelTextChange}
            />
        </>
    )
}

function SaveComponent(props) {
    return (
        <RichText.Content tagName="h1" className={props.attributes.className}  value={props.attributes.text} />
    )
}
